PGDMP                 	    
    {         
   zigvy-blog    15.3    15.3                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    20058 
   zigvy-blog    DATABASE     �   CREATE DATABASE "zigvy-blog" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United States.1252';
    DROP DATABASE "zigvy-blog";
                postgres    false            �            1255    20117    update_edited_time_post_attr()    FUNCTION     �   CREATE FUNCTION public.update_edited_time_post_attr() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
    NEW.edited_time = now();
    RETURN NEW;   
END;
$$;
 5   DROP FUNCTION public.update_edited_time_post_attr();
       public          postgres    false            �            1259    20077    pa_post_attr    TABLE     r  CREATE TABLE public.pa_post_attr (
    id integer NOT NULL,
    user_id integer NOT NULL,
    title character varying(200) NOT NULL,
    body character varying NOT NULL,
    created_time timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    edited_time timestamp with time zone,
    deleted_time timestamp with time zone,
    deleted boolean DEFAULT false
);
     DROP TABLE public.pa_post_attr;
       public         heap    postgres    false            �            1259    20076    pa_post_attr_id_seq    SEQUENCE     �   ALTER TABLE public.pa_post_attr ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.pa_post_attr_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    217            �            1259    20092    pc_post_comment    TABLE     ~  CREATE TABLE public.pc_post_comment (
    id integer NOT NULL,
    post_id integer NOT NULL,
    user_id integer NOT NULL,
    reply_to integer,
    body character varying NOT NULL,
    created_time timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    edited_time timestamp with time zone,
    deleted_time timestamp with time zone,
    deleted boolean DEFAULT false
);
 #   DROP TABLE public.pc_post_comment;
       public         heap    postgres    false            �            1259    20091    pc_post_comment_id_seq    SEQUENCE     �   ALTER TABLE public.pc_post_comment ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.pc_post_comment_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    219            �            1259    20060    ua_user_attr    TABLE     �  CREATE TABLE public.ua_user_attr (
    id integer NOT NULL,
    username character varying(50) NOT NULL,
    name character varying(200) NOT NULL,
    email character varying(320) NOT NULL,
    created_time timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    edited_time timestamp with time zone,
    deleted_time time with time zone,
    deleted boolean DEFAULT false NOT NULL
);
     DROP TABLE public.ua_user_attr;
       public         heap    postgres    false            �            1259    20059    ua_user_attr_id_seq    SEQUENCE     �   ALTER TABLE public.ua_user_attr ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.ua_user_attr_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    215            }           2606    20085    pa_post_attr pa_post_attr_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.pa_post_attr
    ADD CONSTRAINT pa_post_attr_pkey PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.pa_post_attr DROP CONSTRAINT pa_post_attr_pkey;
       public            postgres    false    217                       2606    20100 $   pc_post_comment pc_post_comment_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public.pc_post_comment
    ADD CONSTRAINT pc_post_comment_pkey PRIMARY KEY (id);
 N   ALTER TABLE ONLY public.pc_post_comment DROP CONSTRAINT pc_post_comment_pkey;
       public            postgres    false    219            w           2606    20075 #   ua_user_attr ua_user_attr_email_key 
   CONSTRAINT     _   ALTER TABLE ONLY public.ua_user_attr
    ADD CONSTRAINT ua_user_attr_email_key UNIQUE (email);
 M   ALTER TABLE ONLY public.ua_user_attr DROP CONSTRAINT ua_user_attr_email_key;
       public            postgres    false    215            y           2606    20064    ua_user_attr ua_user_attr_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.ua_user_attr
    ADD CONSTRAINT ua_user_attr_pkey PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.ua_user_attr DROP CONSTRAINT ua_user_attr_pkey;
       public            postgres    false    215            {           2606    20073 &   ua_user_attr ua_user_attr_username_key 
   CONSTRAINT     e   ALTER TABLE ONLY public.ua_user_attr
    ADD CONSTRAINT ua_user_attr_username_key UNIQUE (username);
 P   ALTER TABLE ONLY public.ua_user_attr DROP CONSTRAINT ua_user_attr_username_key;
       public            postgres    false    215            �           2620    20118 ,   pa_post_attr update_edited_time_pa_post_attr    TRIGGER     �   CREATE TRIGGER update_edited_time_pa_post_attr BEFORE UPDATE ON public.pa_post_attr FOR EACH ROW EXECUTE FUNCTION public.update_edited_time_post_attr();
 E   DROP TRIGGER update_edited_time_pa_post_attr ON public.pa_post_attr;
       public          postgres    false    220    217            �           2620    20119 2   pc_post_comment update_edited_time_pc_post_comment    TRIGGER     �   CREATE TRIGGER update_edited_time_pc_post_comment BEFORE UPDATE ON public.pc_post_comment FOR EACH ROW EXECUTE FUNCTION public.update_edited_time_post_attr();
 K   DROP TRIGGER update_edited_time_pc_post_comment ON public.pc_post_comment;
       public          postgres    false    219    220            �           2620    20120 ,   ua_user_attr update_edited_time_ua_user_attr    TRIGGER     �   CREATE TRIGGER update_edited_time_ua_user_attr BEFORE UPDATE ON public.ua_user_attr FOR EACH ROW EXECUTE FUNCTION public.update_edited_time_post_attr();
 E   DROP TRIGGER update_edited_time_ua_user_attr ON public.ua_user_attr;
       public          postgres    false    220    215            �           2606    20086 %   pa_post_attr pa_post_attr_userId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.pa_post_attr
    ADD CONSTRAINT "pa_post_attr_userId_fkey" FOREIGN KEY (user_id) REFERENCES public.ua_user_attr(id);
 Q   ALTER TABLE ONLY public.pa_post_attr DROP CONSTRAINT "pa_post_attr_userId_fkey";
       public          postgres    false    215    3193    217            �           2606    20101 ,   pc_post_comment pc_post_comment_post_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.pc_post_comment
    ADD CONSTRAINT pc_post_comment_post_id_fkey FOREIGN KEY (post_id) REFERENCES public.pa_post_attr(id) NOT VALID;
 V   ALTER TABLE ONLY public.pc_post_comment DROP CONSTRAINT pc_post_comment_post_id_fkey;
       public          postgres    false    219    3197    217            �           2606    20111 -   pc_post_comment pc_post_comment_reply_to_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.pc_post_comment
    ADD CONSTRAINT pc_post_comment_reply_to_fkey FOREIGN KEY (reply_to) REFERENCES public.pc_post_comment(id) NOT VALID;
 W   ALTER TABLE ONLY public.pc_post_comment DROP CONSTRAINT pc_post_comment_reply_to_fkey;
       public          postgres    false    3199    219    219            �           2606    20106 ,   pc_post_comment pc_post_comment_user_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.pc_post_comment
    ADD CONSTRAINT pc_post_comment_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.ua_user_attr(id) NOT VALID;
 V   ALTER TABLE ONLY public.pc_post_comment DROP CONSTRAINT pc_post_comment_user_id_fkey;
       public          postgres    false    215    219    3193           