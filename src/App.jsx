// app
import { useEffect, useState } from "react";
// library
import { useDispatch, useSelector } from "react-redux";
import { Icon } from "@iconify/react";
import Skeleton from "react-loading-skeleton";
// redux
import { getUser, getUserRepos } from "./store/user/userAction";
import { resetUserRepos } from "./store/user/userSlice";
import CardUser from "./components/Card/CardUser";
import CardRepos from "./components/Card/CardRepos";

function App() {
  const dispatch = useDispatch();

  const { user, repos } = useSelector((state) => state.user);

  const [username, setUsername] = useState("rygenzx");
  const [loadingUser, setLoadingUser] = useState(false);
  const [loadingRepos, setLoadingRepos] = useState(false);

  const handleGetUser = async (data) => {
    setLoadingUser(true);

    await dispatch(getUser(data));

    setTimeout(() => {
      setLoadingUser(false);
    }, 1000);
  };

  const handleGetUserRepos = async (data) => {
    setLoadingRepos(true);

    await dispatch(getUserRepos(data));

    setTimeout(() => {
      setLoadingRepos(false);
    }, 1000);
  };

  useEffect(() => {
    if (user) {
      handleGetUserRepos({ username: user.login });
    } else {
      dispatch(resetUserRepos());
    }
  }, [user]);

  useEffect(() => {
    handleGetUser({ username: username });
  }, [username]);

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
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Icon
                icon="ion:search"
                width={20}
                height={20}
                className="text-slate-400 absolute right-4 top-2"
              />
            </div>

            {loadingUser ? (
              <div className="w-72 mb-4 mx-auto lg:mx-0 md:w-96">
                <Skeleton
                  width="100%"
                  height="160px"
                  baseColor="#e2e8f0"
                  highlightColor="#cbd5e1"
                />
              </div>
            ) : (
              <CardUser />
            )}
            {loadingRepos ? (
              <div className="mx-auto w-auto md:mx-0 md:w-full">
                <Skeleton
                  width="100%"
                  height="160px"
                  baseColor="#e2e8f0"
                  highlightColor="#cbd5e1"
                />
              </div>
            ) : repos.length ? (
              <CardRepos />
            ) : null}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
