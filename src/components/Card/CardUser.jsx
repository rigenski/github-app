import { Icon } from "@iconify/react";
import React from "react";
import { useSelector } from "react-redux";

const CardUser = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <>
      <div className="w-72 mb-4 mx-auto lg:mx-0 md:w-auto">
        <div className="p-4 bg-white rounded-md shadow-sm">
          <div className="flex flex-col lg:flex-row">
            <div className="flex flex-col md:flex-row">
              <div className="mx-auto mb-4 w-32 md:mr-8 md:mx-0 md:mb-0">
                {user ? (
                  <img
                    src={user?.avatar_url}
                    alt=""
                    className="w-32 h-32 rounded-full"
                  />
                ) : (
                  <Icon
                    icon="ion:logo-github"
                    width={128}
                    height={128}
                    className="text-slate-800"
                  />
                )}
              </div>
              <div className="mr-0 mb-4 w-40 md:mr-8 md:mb-0">
                <div className="mb-1">
                  <p className="text-xs font-normal text-slate-400">
                    Full Name
                  </p>
                  <h4 className="text-lg font-medium text-slate-800">
                    {user?.name ?? "-"}
                  </h4>
                </div>
                <div className="mb-1">
                  <p className="text-xs font-normal text-slate-400">Username</p>
                  <h6 className="text-sm font-medium text-slate-800">
                    {user?.login ?? "-"}
                  </h6>
                </div>
                <div className="mb-1">
                  <p className="text-xs font-normal text-slate-400">Bio</p>
                  <h6 className="text-sm font-medium text-slate-800">
                    {user?.bio ?? "-"}
                  </h6>
                </div>
              </div>
              <div className="mr-0 mb-4 w-56 md:mr-8 md:mb-0">
                <p className="mb-4 text-xs font-normal text-slate-400">
                  Detail
                </p>
                <div className="mb-2 flex items-center">
                  <Icon
                    icon="ion:location"
                    width={20}
                    height={20}
                    className="text-slate-400 mr-2"
                  />
                  <h6 className="text-sm font-medium text-slate-800">
                    {user?.location ?? "-"}
                  </h6>
                </div>
                <div className="mb-2 flex items-center">
                  <Icon
                    icon="ion:link"
                    width={20}
                    height={20}
                    className="text-slate-400 mr-2"
                  />
                  <h6 className="text-sm font-medium text-slate-800">
                    {user?.blog ?? "-"}
                  </h6>
                </div>
                <div className="mb-2 flex items-center">
                  <Icon
                    icon="ion:logo-twitter"
                    width={20}
                    height={20}
                    className="text-slate-400 mr-2"
                  />
                  <h6 className="text-sm font-medium text-slate-800">
                    {user?.twitter_username ?? "-"}
                  </h6>
                </div>
              </div>
            </div>
            <div className="flex mx-auto">
              <div className="mr-0 flex justify-between items-center lg:mr-8">
                <div className="mr-4">
                  <h2 className="text-3xl font-medium text-slate-800 text-center">
                    {user?.followers ?? "0"}
                  </h2>
                  <p className="text-xs font-normal text-slate-400 text-center">
                    Followers
                  </p>
                </div>
                <div className="ml-4">
                  <h2 className="text-3xl font-medium text-slate-800 text-center">
                    {user?.following ?? "0"}
                  </h2>
                  <p className="text-xs font-normal text-slate-400 text-center">
                    Following
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardUser;
