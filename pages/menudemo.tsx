import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Button from "@components/button";
import Input from "@components/input";
import useMutation from "@libs/client/useMutation";
import { cls } from "@libs/client/utils";
import Layout from "@components/layout";
import useSWR from "swr"
import Nav from "@components/Nav";

const MenuDemo: NextPage = () => {


    return (
        <>
        <Nav/>
            <div className="bg-indigo-600 w-full h-screen">
            </div>
        </>
    );
};
export default MenuDemo;