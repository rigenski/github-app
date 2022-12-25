// app
import { useEffect, useState } from "react";
// library
import { useDispatch, useSelector } from "react-redux";
import { Icon } from "@iconify/react";
import Skeleton from "react-loading-skeleton";
// redux
import { getUser, getUserRepos } from "./store/user/userAction";
import { resetUserRepos } from "./store/user/userSlice";

function App() {
  const dispatch = useDispatch();

  const { user, repos } = useSelector((state) => state.user);

  const [loading, setLoading] = useState(false);

  const handleGetUser = async (data) => {
    setLoading(true);

    await dispatch(getUser(data));

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const handleGetUserRepos = async (data) => {
    setLoading(true);

    await dispatch(getUserRepos(data));

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    if (user) {
      handleGetUserRepos({ username: user.login });
    } else {
      dispatch(resetUserRepos());
    }
  }, [user]);

  return (
    <>
      <main>
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col items-start">
            <h2 className="mb-4 mx-auto text-3xl font-semibold text-slate-800 text-center lg:mx-0 md:text-start">
              Github Repo
            </h2>
            <div className="mb-4 mx-auto relative lg:mx-0">
              <input
                type="text"
                className="pl-4 pr-6 py-1.5 w-72 text-sm text-slate-800 border-2 border-slate-200 rounded-md"
                placeholder="Search User"
                onChange={(e) =>
                  setTimeout(
                    () => handleGetUser({ username: e.target.value }),
                    1000
                  )
                }
              />
              <Icon
                icon="ion:search"
                width={20}
                height={20}
                className="text-slate-400 absolute right-4 top-2"
              />
            </div>

            {loading ? (
              <div className="w-72 mb-4 mx-auto lg:mx-0 md:w-96">
                <Skeleton
                  width="100%"
                  height="160px"
                  baseColor="#e2e8f0"
                  highlightColor="#cbd5e1"
                />
              </div>
            ) : (
              <div className="w-72 mb-4 mx-auto lg:mx-0 md:w-auto">
                <div className="p-4 bg-white rounded-md shadow-sm">
                  <div className="flex flex-col lg:flex-row">
                    <div className="flex flex-col md:flex-row">
                      <div className="mx-auto mb-4 w-32 md:mr-8 md:mx-0 md:mb-0">
                        {user ? (
                          <img
                            src={user.avatar_url}
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
                            {user ? user.name ?? "-" : "-"}
                          </h4>
                        </div>
                        <div className="mb-1">
                          <p className="text-xs font-normal text-slate-400">
                            Username
                          </p>
                          <h6 className="text-sm font-medium text-slate-800">
                            {user ? user.login ?? "-" : "-"}
                          </h6>
                        </div>
                        <div className="mb-1">
                          <p className="text-xs font-normal text-slate-400">
                            Bio
                          </p>
                          <h6 className="text-sm font-medium text-slate-800">
                            {user ? user.bio ?? "-" : "-"}
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
                            {user ? user.location ?? "-" : "-"}
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
                            {user ? user.blog ?? "-" : "-"}
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
                            {user ? user.twitter_username ?? "-" : "-"}
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="flex mx-auto">
                      <div className="mr-0 flex justify-between items-center lg:mr-8">
                        <div className="mr-4">
                          <h2 className="text-3xl font-medium text-slate-800 text-center">
                            {user ? user.followers ?? "-" : "-"}
                          </h2>
                          <p className="text-xs font-normal text-slate-400 text-center">
                            Followers
                          </p>
                        </div>
                        <div className="ml-4">
                          <h2 className="text-3xl font-medium text-slate-800 text-center">
                            {user ? user.following ?? "-" : "-"}
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
            )}
            {loading ? (
              <div className="mx-auto w-auto md:mx-0 md:w-full">
                <Skeleton
                  width="100%"
                  height="160px"
                  baseColor="#e2e8f0"
                  highlightColor="#cbd5e1"
                />
              </div>
            ) : repos.length ? (
              <div className="mx-auto w-auto md:mx-0 md:w-full">
                <div className="hidden justify-between lg:flex">
                  <div className="w-72 px-6 py-2">
                    <p className="text-sm font-normal text-slate-400">NAME</p>
                  </div>
                  <div className="w-24 px-6 py-2">
                    <p className="text-sm font-normal text-slate-400">FORK</p>
                  </div>
                  <div className="w-48 px-6 py-2">
                    <p className="text-sm font-normal text-slate-400">
                      LANGUAGE
                    </p>
                  </div>
                  <div className="w-36 px-6 py-2">
                    <p className="text-sm font-normal text-slate-400">
                      PUSHED AT
                    </p>
                  </div>
                  <div className="w-24 px-6 py-2">
                    <p className="text-sm font-normal text-slate-400">STAR</p>
                  </div>
                </div>
                {repos.map((item, index) => {
                  return (
                    <div
                      className="mb-2 p-4 w-72 flex flex-wrap justify-between items-start bg-white rounded-md shadow-sm md:p-0 md:w-full md:flex-nowrap md:items-center"
                      key={index}
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
                              {item ? item.name ?? "-" : "-"}
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
                          {item ? item.forks ?? "-" : "-"}
                        </p>
                      </div>
                      <div className="w-6/12 mb-2 p-0 text-left md:w-48 md:mb-0 md:px-6 md:py-4">
                        <p className="block text-xs font-normal text-slate-400 md:hidden">
                          Language
                        </p>
                        <p className="text-sm font-normal text-slate-800 whitespace-nowrap">
                          {item ? item.language ?? "-" : "-"}
                        </p>
                      </div>
                      <div className="w-6/12 p-0 text-left md:w-36 md:px-6 md:py-4">
                        <p className="block text-xs font-normal text-slate-400 md:hidden">
                          Pushed At
                        </p>
                        <p className="text-sm font-normal text-slate-800 whitespace-nowrap">
                          {item ? item.pushed_at.substring(0, 10) ?? "-" : "-"}
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
                            {item ? item.stargazers_count ?? "-" : "-"}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : null}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
