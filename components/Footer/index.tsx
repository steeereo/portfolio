import { GithubIcon } from "../Icons";

export default function Footer() {
  console.log(process.env.VERCEL_GIT_COMMIT_SHA);

  return (
    <footer className="m:px-0 border:neutral-200 mt-10 flex w-full justify-center border-t border-solid dark:border-neutral-950 sm:mt-20">
      <div className="max-w-main flex-1">
        <div className="flex w-full items-center justify-between gap-4 pt-4">
          <div className="flex gap-1.5 text-xs text-neutral-500 [font-variation-settings:'opsz'_12] dark:text-silver-dark">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="7"
              height="16"
              fill="none"
              viewBox="0 0 7 16"
              className="fill-neutral-500 dark:fill-silver-dark"
            >
              <path d="M3 6.5h1v6l-.5 1-.5-1v-6z"></path>
              <path
                fillRule="evenodd"
                d="M3.5 6a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm-1-3a.5.5 0 100-1 .5.5 0 000 1z"
                clipRule="evenodd"
              ></path>
            </svg>
            Potsdam, Germany
          </div>
          <div className="flex">
            <a
              className="link link-sm flex items-center gap-1.5"
              href={
                process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA
                  ? `//github.com/fabe/site/commit/${process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA}`
                  : `//github.com/fabe/site`
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon size={12} />
              <span>
                fabe/site
                {process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA && (
                  <span className="font-mono text-neutral-500/[.5] dark:text-silver-dark/[.5]">
                    #{process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA.slice(0, 7)}
                  </span>
                )}
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
