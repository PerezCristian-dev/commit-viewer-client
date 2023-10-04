export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between p-24">
      <div className="flex items-center justify-between">
        <img
          className="mr-4 w-[30px] h-[30px]"
          src="./github-mark-white.svg"
          alt="GitHubLogo"
        />
        <span>GitHub Commit Viewer</span>
      </div>
    </main>
  );
}
