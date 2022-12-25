import { Icon } from "@iconify/react";
import React from "react";
import { useSelector } from "react-redux";

const CardRepos = () => {
  const { repos } = useSelector((state) => state.user);

  return (
    <>
      <div className="mx-auto w-auto md:mx-0 md:w-full">
        <div className="hidden justify-between lg:flex">
          <div className="w-72 px-6 py-2">
            <p className="text-sm font-normal text-slate-400">NAME</p>
          </div>
          <div className="w-24 px-6 py-2">
            <p className="text-sm font-normal text-slate-400">FORK</p>
          </div>
          <div className="w-48 px-6 py-2">
            <p className="text-sm font-normal text-slate-400">LANGUAGE</p>
          </div>
          <div className="w-36 px-6 py-2">
            <p className="text-sm font-normal text-slate-400">PUSHED AT</p>
          </div>
          <div className="w-24 px-6 py-2">
            <p className="text-sm font-normal text-slate-400">STAR</p>
          </div>
        </div>
        {repos.map((item, index) => {
          return (
            <button
              className="mb-2 p-4 w-72 flex flex-wrap justify-between items-start bg-white rounded-md shadow-sm md:p-0 md:w-full md:flex-nowrap md:items-center"
              key={index}
              onClick={() => window.open(item?.html_url, "_blank")}
            >
              <div className="w-full mb-2 p-0 text-sm text-slate-800 text-left md:w-72 md:mb-0 md:px-6 md:py-4">
                <div className="flex items-center">
                  <div className="h-5 w-5 ml-0 mr-2 my-2 md:m-2">
                    <Icon
                      icon="ion:document"
                      width={20}
                      height={20}
                      className="text-slate-400"
                    />
                  </div>
                  <div className="ml-2">
                    <h6 className="mb-0.5 text-sm font-medium text-slate-800 whitespace-nowrap">
                      {item ? item?.name?.substring(0, 24) ?? "-" : "-"}
                    </h6>
                    <div className="flex items-center">
                      <Icon
                        icon="ion:unlink"
                        width={16}
                        height={16}
                        className="text-slate-400 mr-2"
                      />
                      <p className="text-xs font-normal text-slate-400 whitespace-nowrap">
                        reactjs, firebase
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-6/12 mb-2 p-0 text-left md:w-24 md:mb-0 md:px-6 md:py-4">
                <p className="block text-xs font-normal text-slate-400 md:hidden">
                  Fork
                </p>
                <p className="text-sm font-normal text-slate-800 whitespace-nowrap">
                  {item ? item?.forks ?? "-" : "-"}
                </p>
              </div>
              <div className="w-6/12 mb-2 p-0 text-left md:w-48 md:mb-0 md:px-6 md:py-4">
                <p className="block text-xs font-normal text-slate-400 md:hidden">
                  Language
                </p>
                <p className="text-sm font-normal text-slate-800 whitespace-nowrap">
                  {item ? item?.language ?? "-" : "-"}
                </p>
              </div>
              <div className="w-6/12 p-0 text-left md:w-36 md:px-6 md:py-4">
                <p className="block text-xs font-normal text-slate-400 md:hidden">
                  Pushed At
                </p>
                <p className="text-sm font-normal text-slate-800 whitespace-nowrap">
                  {item ? item?.pushed_at?.substring(0, 10) ?? "-" : "-"}
                </p>
              </div>
              <div className="w-6/12 p-0 text-left md:w-24 md:px-6 md:py-4">
                <p className="block text-xs font-normal text-slate-400 md:hidden">
                  Star
                </p>
                <div className="flex items-center">
                  <Icon
                    icon="ion:star"
                    width={16}
                    height={16}
                    className="text-yellow-400 mr-2"
                  />
                  <p className="text-sm font-normal text-slate-800 whitespace-nowrap">
                    {item ? item?.stargazers_count ?? "-" : "-"}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </>
  );
};

export default CardRepos;
