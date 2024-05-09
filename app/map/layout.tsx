export default function layout({
  children,
  astar,
  djikstra,
}: {
  children: React.ReactNode;
  astar: React.ReactNode;
  djikstra: React.ReactNode;
}) {
  return (
    <>
      {children}
      {astar}
      {djikstra}
    </>
  );
}
