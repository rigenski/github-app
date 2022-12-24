import { Icon } from "@iconify/react";

function App() {
  return (
    <>
      <main>
        <div className="container mx-auto py-16">
          <div className="flex flex-col items-start">
            <div className="mb-4 relative">
              <input
                type="text"
                className="pl-4 pr-6 py-1.5 w-64 text-sm text-slate-800 border-2 border-slate-200 rounded-md"
                placeholder="Search User"
              />
              <Icon
                icon="ion:search"
                width={20}
                height={20}
                className="text-slate-400 absolute right-4 top-2"
              />
            </div>
            <div className="mb-2 w-full">
              <div className="p-4 bg-white rounded-md shadow-sm">
                <div className="flex">
                  <div className="flex">
                    <div className="mr-8">
                      <img
                        src="https://avatars.githubusercontent.com/u/63197023?v=4"
                        alt=""
                        className="w-32 h-32 rounded-full"
                      />
                    </div>
                    <div className="mr-16">
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
                    <div className="mr-16">
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
                  <div className="flex justify-center mx-auto">
                    <div className="flex justify-between items-center">
                      <div className="mx-8">
                        <h2 className="text-4xl font-medium text-slate-800 text-center">
                          24
                        </h2>
                        <p className="text-xs font-normal text-slate-400 text-center">
                          Followers
                        </p>
                      </div>
                      <div className="mx-8">
                        <h2 className="text-4xl font-medium text-slate-800 text-center">
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
            <div className="w-full">
              <div className="flex justify-between">
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
              <div className="mb-2 flex justify-between items-center bg-white rounded-md shadow-sm">
                <div className="w-72 px-6 py-4 text-sm text-slate-800 text-left">
                  <div className="flex items-center">
                    <Icon
                      icon="ion:document"
                      width={20}
                      height={20}
                      className="text-slate-400 m-2"
                    />
                    <div className="ml-2">
                      <h6 className="mb-0.5 text-sm font-medium text-slate-800">
                        Lorem Ipsum
                      </h6>
                      <div className="flex items-center">
                        <Icon
                          icon="ion:unlink"
                          width={16}
                          height={16}
                          className="text-slate-400 mr-2"
                        />
                        <p className="text-xs font-normal text-slate-600">
                          reactjs, firebase
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-24 px-6 py-4 text-left">
                  <p className="text-sm font-normal text-slate-800">4</p>
                </div>
                <div className="w-48 px-6 py-4 text-left">
                  <p className="text-sm font-normal text-slate-800">
                    Javascript
                  </p>
                </div>
                <div className="w-36 px-6 py-4 text-left">
                  <p className="text-sm font-normal text-slate-800">
                    22-02-2022
                  </p>
                </div>
                <div className="w-24 px-6 py-4 text-left">
                  <div className="flex items-center">
                    <Icon
                      icon="ion:star"
                      width={16}
                      height={16}
                      className="text-yellow-400 mr-2"
                    />
                    <p className="text-sm font-normal text-slate-800">2</p>
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
