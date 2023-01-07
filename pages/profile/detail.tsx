import type { NextPage } from "next";
import Button from "@components/button";
import Input from "@components/input";
import Layout from "@components/layout";
import { useForm } from "react-hook-form";
import useMutation from "@libs/client/useMutation";
import { useEffect } from "react";
import { UserDetail } from "@prisma/client";
import { useRouter } from "next/router";
import useSWR from "swr"


interface UserDetailForm {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  province: string;
  postCode: string;
}

interface UserDetailMutation {
  ok: boolean;
  userDetail: UserDetail;
}

const Upload: NextPage = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<UserDetailForm>();
  const [editProfile, { loading, data }] = useMutation<UserDetailMutation>("/api/profile/detail")
  const { data: userData } = useSWR("/api/profile/detail");  // console.log(user)

  const onValid = (data: UserDetailForm) => {
    if (loading)
      return;
    editProfile(data)
  }
  useEffect(() => {
    if (data?.ok) {
      router.push(`/profile`);
    }
  }, [data, router])

  console.log("detail")
  console.log(userData)

  const regEmail = userData?.userDetail?.user?.email ? userData?.userDetail?.user?.email : "N/A";
  const regPhone = userData?.userDetail?.user?.phone ? userData?.userDetail?.user?.phone : "N/A";

  return (
    <Layout canGoBack title="Edit Profile">
      <div className="flex flex-col items-center ">
        <form className="p-4 space-y-4 w-full max-w-[30rem] bg-gray-100" onSubmit={handleSubmit(onValid)}>
        <div className="flex bg-red-200 gap-x-3 p-1">
          <Input label="Registered email" name="registeredEmail" type= "text"  disabled value ={regEmail}/>
          <Input label="Registered phone" name ="registeredPhone" type= "phone"  disabled value ={regPhone}/>
        </div>
          <div className="flex flex-col md:flex-row md:gap-x-4">
            <Input register={register("firstName", { required: true })} required label="*First Name" name="firstName" type="text" value={userData?.userDetail?.firstName} />
            <Input register={register("lastName", { required: true })} required label="*Last Name" name="lastName" type="text" value={userData?.userDetail?.lastName}/>
          </div>
          <Input register={register("email", { required: true })} required label="Email" name="email" type="text" value={userData?.userDetail?.email}/>
          <div className="flex gap-4">
            <Input register={register("phone", { required: true })} required label="Phone" name="phone" type="text" value={userData?.userDetail?.phone}/>
            <Input label="Ext.(Optional) DB not connect" name="phoneExtension" type="text" value={userData?.userDetail?.phoneExtension}  />
          </div>
          <Input register={register("address", { required: true })} required label="Address" name="address" type="text" value={userData?.userDetail?.address}/>
          <div className="flex flex-col md:flex-row gap-x-4">
            <Input register={register("city", { required: true })} required label="City" name="name" type="city" value={userData?.userDetail?.city}/>
            <div className="flex gap-x-4">
              <Input register={register("province", { required: true })} required label="Province" name="province" type="text" value={userData?.userDetail?.province}/>
              <Input register={register("postCode", { required: true })} required label="Postal Code" name="postCode" type="text" value={userData?.userDetail?.postCode}/>
            </div>
          </div>
          <div className="flex gap-x-4">
            {/* <Button text="Cancel" /> */}
            <Button text={loading ? "loading..." : "Edit Profile"} />
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Upload;