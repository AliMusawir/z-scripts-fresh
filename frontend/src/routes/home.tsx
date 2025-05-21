import React from "react";
<<<<<<< HEAD
import { useDispatch } from "react-redux";
import posthog from "posthog-js";
import { setReplayJson } from "#/state/initial-query-slice";
import { useGitUser } from "#/hooks/query/use-git-user";
import { useGitHubAuthUrl } from "#/hooks/use-github-auth-url";
import { useConfig } from "#/hooks/query/use-config";
import { ReplaySuggestionBox } from "#/components/features/suggestions/replay-suggestion-box";
import { GitRepositoriesSuggestionBox } from "#/components/features/git/git-repositories-suggestion-box";
import { CodeNotInGitLink } from "#/components/features/git/code-not-in-github-link";
import BuildIt from "#/icons/z360Logo.svg?react";
import { TaskForm } from "#/components/shared/task-form";
import { convertFileToText } from "#/utils/convert-file-to-text";
import { ENABLE_TRAJECTORY_REPLAY } from "#/utils/feature-flags";
=======
import { PrefetchPageLinks } from "react-router";
import { HomeHeader } from "#/components/features/home/home-header";
import { RepoConnector } from "#/components/features/home/repo-connector";
import { TaskSuggestions } from "#/components/features/home/tasks/task-suggestions";
import { useUserProviders } from "#/hooks/use-user-providers";
>>>>>>> tags/0.39.0

<PrefetchPageLinks page="/conversations/:conversationId" />;

function HomeScreen() {
  const { providers } = useUserProviders();
  const [selectedRepoTitle, setSelectedRepoTitle] = React.useState<
    string | null
  >(null);

  const providersAreSet = providers.length > 0;

  return (
    <div
      data-testid="home-screen"
<<<<<<< HEAD
      className=" bg-white text-[#6A6A6C] h-full   relative rounded-2xl overflow-hidden"
    >
      <div className="bg-gradient-to-br from-[#1FACD3]/80  to-[#FFD436]/80 w-full h-full flex flex-col items-center justify-center relative overflow-y-auto ">
        <div className="bg-white rounded-2xl shadow-2xl z-10 px-8 py-6 flex flex-col items-center justify-center">
          <BuildIt height={80} />

          <div className="w-full text-center flex flex-col justify-center items-center gap-4 mt-4">
            <h1 className="text-2xl font-bold text-[#1FACD3]">
              Lets craft something awesome!
            </h1>
            <div className=" text-lg font-semibold">
              AI Powered code at lightning speed <br />
              (specifically for Z360's development cause we are a bit biased
              here)
            </div>
          </div>

          <div className="flex flex-col gap-1 w-full mt-8 md:w-[600px] items-center">
            <div className="flex flex-col gap-2 w-full">
              <TaskForm ref={formRef} />
            </div>

            <div className="flex gap-4 w-full flex-col md:flex-row mt-8">
              <GitRepositoriesSuggestionBox
                handleSubmit={() => formRef.current?.requestSubmit()}
                gitHubAuthUrl={gitHubAuthUrl}
                user={user || null}
              />
              {ENABLE_TRAJECTORY_REPLAY() && (
                <ReplaySuggestionBox
                  onChange={async (event) => {
                    if (event.target.files) {
                      const json = event.target.files[0];
                      dispatch(setReplayJson(await convertFileToText(json)));
                      posthog.capture("json_file_uploaded");
                      formRef.current?.requestSubmit();
                    } else {
                      // TODO: handle error
                    }
                  }}
                />
              )}
            </div>
            <div className="w-full flex justify-start mt-2 ml-2">
              <CodeNotInGitLink />
            </div>
          </div>
        </div>
      </div>
=======
      className="bg-base-secondary h-full flex flex-col rounded-xl px-[42px] pt-[42px] gap-8 overflow-y-auto"
    >
      <HomeHeader />

      <hr className="border-[#717888]" />

      <main className="flex flex-col md:flex-row justify-between gap-8">
        <RepoConnector
          onRepoSelection={(title) => setSelectedRepoTitle(title)}
        />
        <hr className="md:hidden border-[#717888]" />
        {providersAreSet && <TaskSuggestions filterFor={selectedRepoTitle} />}
      </main>
>>>>>>> tags/0.39.0
    </div>
  );
}

export default HomeScreen;
