create table if not exists public.contact_requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null check (char_length(name) between 2 and 100),
  contact text not null check (char_length(contact) between 6 and 160),
  company text not null default '' check (char_length(company) <= 160),
  need text not null default '' check (char_length(need) <= 200),
  message text not null check (char_length(message) between 15 and 5000),
  consent boolean not null check (consent = true),
  source text not null default '/lien-he',
  status text not null default 'new' check (status in ('new','reviewed','closed'))
);
alter table public.contact_requests enable row level security;
revoke all on public.contact_requests from anon, authenticated;
-- Public visitors cannot read, update or directly insert requests.
-- The Edge Function validates input and inserts using a server-only service role.
