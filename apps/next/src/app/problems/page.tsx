"use client";
import ProblemsList from "./_components/ProblemsList";
import ProblemsListFilter from "./_components/ProblemsListFilter";
import http_client from "../api/client";
import { ProblemsSearchParamsType, ProblemType } from "@/types/Problem";
import { ProblemsProvider } from "@/contenxt/ProblemsProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

type ProblemsPageProps = {
  searchParams: ProblemsSearchParamsType;
};

export default function Problems({ searchParams }: ProblemsPageProps) {
  const { type } = searchParams;

  return (
    <ProblemsProvider searchParams={searchParams}>
      <div className="px-4 md:px-20 bg-black py-5 sm:py-8 gap-4 grid grid-rows-[auto_1fr] h-screen ">
        <ProblemsListFilter type={type} />
        <ProblemsList />
      </div>
    </ProblemsProvider>
  );
}
