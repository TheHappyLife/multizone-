/* eslint-disable @next/next/no-html-link-for-pages */
"use client";
import cn from "@/utils/cn";
import { GeneralProps } from "@/types/ui";
import DefaultPageLayout from "@/components/layouts/DefaultPageLayout";

interface HomeViewProps extends GeneralProps {}

const HomeView = (props: HomeViewProps) => {
  return (
    <DefaultPageLayout className={cn("flex flex-col gap-4 pb-bottom-page", props.className)}>
      Reward view
      <a href="/" className="px-5 py-3 bg-blue-300 text-black w-fit inline-block">
        Go to Home zone
      </a>
    </DefaultPageLayout>
  );
};
export default HomeView;
