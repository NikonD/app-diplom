--
-- PostgreSQL database dump
--

-- Dumped from database version 15.2
-- Dumped by pg_dump version 15.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

ALTER TABLE ONLY public.works DROP CONSTRAINT works_users_id_fk;
ALTER TABLE ONLY public.tasks DROP CONSTRAINT tasks_users_id_fk;
ALTER TABLE ONLY public.rewards DROP CONSTRAINT rewards_users_id_fk2;
ALTER TABLE ONLY public.rewards DROP CONSTRAINT rewards_users_id_fk;
ALTER TABLE ONLY public.rewards DROP CONSTRAINT rewards_reports_id_fk;
ALTER TABLE ONLY public.reports DROP CONSTRAINT reports_works_id_fk;
ALTER TABLE ONLY public.reports DROP CONSTRAINT reports_users_id_fk;
ALTER TABLE ONLY public.reports DROP CONSTRAINT reports_tasks_id_fk;
DROP INDEX public.users_phone_uindex;
DROP INDEX public.users__index;
ALTER TABLE ONLY public.works DROP CONSTRAINT works_pk;
ALTER TABLE ONLY public.users DROP CONSTRAINT users_pk;
ALTER TABLE ONLY public.tasks DROP CONSTRAINT tasks_pk;
ALTER TABLE ONLY public.rewards DROP CONSTRAINT rewards_pk;
ALTER TABLE ONLY public.reports DROP CONSTRAINT reports_pk;
DROP TABLE public.works;
DROP TABLE public.users;
DROP TABLE public.tasks;
DROP TABLE public.rewards;
DROP TABLE public.reports;
SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: reports; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.reports (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    date_created timestamp with time zone NOT NULL,
    date_updated timestamp with time zone,
    status integer DEFAULT 0 NOT NULL,
    criteria json,
    user_id uuid,
    task_id uuid,
    work_id uuid
);


ALTER TABLE public.reports OWNER TO postgres;

--
-- Name: rewards; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.rewards (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    task_owner_id uuid NOT NULL,
    report_owner_id uuid NOT NULL,
    report_id uuid NOT NULL,
    criteria json NOT NULL,
    points integer NOT NULL
);


ALTER TABLE public.rewards OWNER TO postgres;

--
-- Name: tasks; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tasks (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    user_id uuid NOT NULL,
    title text NOT NULL,
    description text NOT NULL,
    status integer DEFAULT 0 NOT NULL,
    date_created timestamp with time zone NOT NULL,
    date_ended timestamp with time zone,
    criteria text[] NOT NULL
);


ALTER TABLE public.tasks OWNER TO postgres;

--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    fullname text NOT NULL,
    email text NOT NULL,
    phone text NOT NULL,
    organization text NOT NULL,
    password text NOT NULL,
    type integer NOT NULL,
    date_created timestamp with time zone NOT NULL,
    verify boolean,
    verify_code text
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: works; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.works (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    title text NOT NULL,
    content text NOT NULL,
    files text[] NOT NULL,
    user_id uuid NOT NULL,
    date_created timestamp with time zone NOT NULL,
    date_updated timestamp with time zone
);


ALTER TABLE public.works OWNER TO postgres;

--
-- Data for Name: reports; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.reports (id, date_created, date_updated, status, criteria, user_id, task_id, work_id) FROM stdin;
\.


--
-- Data for Name: rewards; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.rewards (id, task_owner_id, report_owner_id, report_id, criteria, points) FROM stdin;
\.


--
-- Data for Name: tasks; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tasks (id, user_id, title, description, status, date_created, date_ended, criteria) FROM stdin;
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, fullname, email, phone, organization, password, type, date_created, verify, verify_code) FROM stdin;
244a9951-469b-4b47-975b-bd41a749a6ac	Full name1	nikon@gmail.com	11232111111	чтото.com	0905nikon	0	2023-04-12 12:47:19.237+06	\N	\N
8b6f7e77-1617-4e9a-b5ef-cd506363ae1a	Моржов Морж Моржович	aaaaa@aaa.rrr	12345678	Чтото.com	$2b$08$gs2UcSszVJlk9ZCml6NiouX4Y/7nxHV.ThV2cpBrkC0Ce7KIbGJW.	0	2023-04-11 23:25:58.513+06	\N	\N
e62ac9a4-3a1d-4960-badd-b0d58c7f991e	Зубенко михаил петрович	xenijox365@liaphoto.co	11232141	website.com	0905nikon	0	2023-04-12 12:30:56.119+06	\N	\N
1e27e128-80dc-48fd-af32-abd7ad6bba3f	Зубенко Михаил Петрович	xenijox365@liaphoto.com	1231293129	web.com	$2b$08$gs2UcSszVJlk9ZCml6NiouX4Y/7nxHV.ThV2cpBrkC0Ce7KIbGJW.	0	2023-04-12 12:28:01.896+06	\N	\N
\.


--
-- Data for Name: works; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.works (id, title, content, files, user_id, date_created, date_updated) FROM stdin;
\.


--
-- Name: reports reports_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reports
    ADD CONSTRAINT reports_pk PRIMARY KEY (id);


--
-- Name: rewards rewards_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.rewards
    ADD CONSTRAINT rewards_pk PRIMARY KEY (id);


--
-- Name: tasks tasks_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tasks
    ADD CONSTRAINT tasks_pk PRIMARY KEY (id);


--
-- Name: users users_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pk PRIMARY KEY (id);


--
-- Name: works works_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.works
    ADD CONSTRAINT works_pk PRIMARY KEY (id);


--
-- Name: users__index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX users__index ON public.users USING btree (email);


--
-- Name: users_phone_uindex; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX users_phone_uindex ON public.users USING btree (phone);


--
-- Name: reports reports_tasks_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reports
    ADD CONSTRAINT reports_tasks_id_fk FOREIGN KEY (task_id) REFERENCES public.tasks(id);


--
-- Name: reports reports_users_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reports
    ADD CONSTRAINT reports_users_id_fk FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- Name: reports reports_works_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reports
    ADD CONSTRAINT reports_works_id_fk FOREIGN KEY (work_id) REFERENCES public.works(id);


--
-- Name: rewards rewards_reports_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.rewards
    ADD CONSTRAINT rewards_reports_id_fk FOREIGN KEY (report_id) REFERENCES public.reports(id);


--
-- Name: rewards rewards_users_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.rewards
    ADD CONSTRAINT rewards_users_id_fk FOREIGN KEY (task_owner_id) REFERENCES public.users(id);


--
-- Name: rewards rewards_users_id_fk2; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.rewards
    ADD CONSTRAINT rewards_users_id_fk2 FOREIGN KEY (report_owner_id) REFERENCES public.users(id);


--
-- Name: tasks tasks_users_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tasks
    ADD CONSTRAINT tasks_users_id_fk FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- Name: works works_users_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.works
    ADD CONSTRAINT works_users_id_fk FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

