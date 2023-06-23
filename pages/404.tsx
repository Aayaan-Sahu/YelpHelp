import Nav from "../src/components/Nav/Nav";
import { MountedContext, useMountedContext } from "../src/MountedContext";
import { useEffect } from "react";

export default function Page404() {
  const { mounted, setMounted } = useMountedContext();
  useEffect(() => {
    setMounted(true);
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <Nav mounted={mounted} />
      <div className="flex items-center justify-center h-screen">
        <div>
          <h1 className="text-center font-semibold text-5xl">404</h1>
          <p className="text-center">PAGE NOT FOUND</p>
        </div>

        {/* <div className="flex flex-col justify-center items-center">
          <a
            style={{ borderRadius: "16px" }}
            className="flex flex-col justify-content items-center my-6 py-4 px-20 border-2 dark:border-gray-700 border-gray-200 transition hover:bg-gray-100 dark:hover:bg-gray-800"
            rel="noopener noreferrer"
            target="_blank"
            href="mailto:aayaansahu@gmail.com"
          >
            VIKSAR DUBEY
          </a>
        </div> */}
      </div>
    </>
  );
}
