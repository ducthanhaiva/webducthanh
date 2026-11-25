import { createClient } from 'npm:@supabase/supabase-js@2';
const cors={'Access-Control-Allow-Origin':'*','Access-Control-Allow-Headers':'content-type','Access-Control-Allow-Methods':'POST, OPTIONS'};
const respond=(status:number,body:unknown)=>new Response(JSON.stringify(body),{status,headers:{...cors,'Content-Type':'application/json'}});
Deno.serve(async req=>{
  if(req.method==='OPTIONS')return new Response(null,{headers:cors});
  if(req.method!=='POST')return respond(405,{error:'Method not allowed'});
  if(!req.headers.get('content-type')?.includes('application/json'))return respond(415,{error:'Expected JSON'});
  try{
    const raw=await req.text();
    if(raw.length>15000)return respond(413,{error:'Request too large'});
    const data=JSON.parse(raw);
    const field=(key:string,max:number)=>typeof data[key]==='string'?data[key].trim().slice(0,max+1):'';
    const name=field('name',100),contact=field('contact',160),company=field('company',160),need=field('need',200),message=field('message',5000),source=field('source',200)||'/lien-he';
    if(name.length<2||name.length>100||contact.length<6||contact.length>160||company.length>160||need.length>200||message.length<15||message.length>5000||source.length>200||data.consent!==true)return respond(400,{error:'Invalid request'});
    const url=Deno.env.get('SUPABASE_URL'),key=Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
    if(!url||!key)return respond(503,{error:'Reception not configured'});
    const db=createClient(url,key,{auth:{persistSession:false}});
    const {error}=await db.from('contact_requests').insert({name,contact,company,need,message,source,consent:true});
    if(error)return respond(500,{error:'Unable to receive request'});
    return respond(201,{received:true});
  }catch{return respond(400,{error:'Invalid JSON request'});}
});
