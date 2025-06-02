"use client";
import cn from "@/utils/cn";
import { GeneralProps } from "@/types/ui";
import DefaultPageLayout from "@/components/layouts/DefaultPageLayout";

interface HomeViewProps extends GeneralProps {}

const HomeView = (props: HomeViewProps) => {
  return (
    <DefaultPageLayout className={cn("flex flex-col gap-4 pb-bottom-page", props.className)}>
      Home view
      <a href="/reward" className="px-5 py-3 bg-red-300 text-black w-fit inline-block">
        Go to Reward zone
      </a>
    </DefaultPageLayout>
  );
};
export default HomeView;
