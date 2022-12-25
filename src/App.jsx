import { Icon } from "@iconify/react";

function App() {
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
              />
              <Icon
                icon="ion:search"
                width={20}
                height={20}
                className="text-slate-400 absolute right-4 top-2"
              />
            </div>
            <div className="w-72 mb-4 mx-auto lg:mx-0 md:w-auto">
              <div className="p-4 bg-white rounded-md shadow-sm">
                <div className="flex flex-col lg:flex-row">
                  <div className="flex flex-col md:flex-row">
                    <div className="mx-auto mb-4 w-32 md:mr-8 md:mx-0 md:mb-0">
                      <img
                        src="https://avatars.githubusercontent.com/u/63197023?v=4"
                        alt=""
                        className="w-32 h-32 rounded-full"
                      />
                    </div>
                    <div className="mr-0 mb-4 w-40 md:mr-8 md:mb-0">
                      <div className="mb-1">
                        <p className="text-xs font-normal text-slate-400">
                          Full Name
                        </p>
                        <h4 className="text-lg font-medium text-slate-800">
                          Rigen Maulana
                        </h4>
                      </div>
                      <div className="mb-1">
                        <p className="text-xs font-normal text-slate-400">
                          Username
                        </p>
                        <h6 className="text-sm font-medium text-slate-800">
                          rygenzx
                        </h6>
                      </div>
                      <div className="mb-1">
                        <p className="text-xs font-normal text-slate-400">
                          Bio
                        </p>
                        <h6 className="text-sm font-medium text-slate-800">
                          Grow With Tech
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
                          Sukoharjo, Jawa Tengah
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
                          rigenmaulana.vercel.app
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
                          @rygen_zx
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="flex mx-auto">
                    <div className="mr-0 flex justify-between items-center lg:mr-8">
                      <div className="mr-4">
                        <h2 className="text-3xl font-medium text-slate-800 text-center">
                          24
                        </h2>
                        <p className="text-xs font-normal text-slate-400 text-center">
                          Followers
                        </p>
                      </div>
                      <div className="ml-4">
                        <h2 className="text-3xl font-medium text-slate-800 text-center">
                          16
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
                  <p className="text-sm font-normal text-slate-400">DATE</p>
                </div>
                <div className="w-24 px-6 py-2">
                  <p className="text-sm font-normal text-slate-400">STAR</p>
                </div>
              </div>
              <div className="mb-2 p-4 w-72 flex flex-wrap justify-between items-start bg-white rounded-md shadow-sm md:p-0 md:w-full md:flex-nowrap md:items-center">
                <div className="w-full mb-2 p-0 text-sm text-slate-800 text-left md:w-72 md:mb-0 md:px-6 md:py-4">
                  <div className="flex items-center">
                    <Icon
                      icon="ion:document"
                      width={20}
                      height={20}
                      className="text-slate-400 ml-0 mr-2 my-2 md:m-2"
                    />
                    <div className="ml-2">
                      <h6 className="mb-0.5 text-sm font-medium text-slate-800 whitespace-nowrap">
                        Lorem Ipsum
                      </h6>
                      <div className="flex items-center">
                        <Icon
                          icon="ion:unlink"
                          width={16}
                          height={16}
                          className="text-slate-400 mr-2"
                        />
                        <p className="text-xs font-normal text-slate-600 whitespace-nowrap">
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
                    4
                  </p>
                </div>
                <div className="w-6/12 mb-2 p-0 text-left md:w-48 md:mb-0 md:px-6 md:py-4">
                  <p className="block text-xs font-normal text-slate-400 md:hidden">
                    Language
                  </p>
                  <p className="text-sm font-normal text-slate-800 whitespace-nowrap">
                    Javascript
                  </p>
                </div>
                <div className="w-6/12 p-0 text-left md:w-36 md:px-6 md:py-4">
                  <p className="block text-xs font-normal text-slate-400 md:hidden">
                    Date
                  </p>
                  <p className="text-sm font-normal text-slate-800 whitespace-nowrap">
                    22-02-2022
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
                      2
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
