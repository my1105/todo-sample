import { NextPage } from "next";

import BoxContent from "@/components/BoxContent";


const Page: NextPage = () => {
  return(
<div className="mx-auto mt-10 max-w-4xl">
  <BoxContent
  title1="これはタイトルです"
  content1="これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。" 
  title2="これはタイトルです"
  content2="これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。" 
  title3="これはタイトルです"
  content3="これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。" 
  />

</div>
);
};

export default Page;
