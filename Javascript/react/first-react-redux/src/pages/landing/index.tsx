import { lazy, Suspense, useState } from "react";

import Layout from "../../components/Layout";
import Button from "../../components/Button";

const LazyComponent1 = lazy(() => import("../../components/LazyComponent1"));
const LazyComponent2 = lazy(() => import("../../components/LazyComponent2"));

const Landing = () => {
  const [showLazy1, setShowLazy1] = useState<boolean>(false);
  const [showLazy2, setShowLazy2] = useState<boolean>(false);

  const toggleComponent1 = () => {
    setShowLazy1(!showLazy1);
  };

  const toggleComponent2 = () => {
    setShowLazy2(!showLazy2);
  };

  return (
    <Layout>
      <div className="m-10 flex flex-column space-x-5">
        <Button
          id="component1"
          label={showLazy1 ? "Hide Component 1" : "Show Component 1"}
          onClick={() => toggleComponent1()}
        />
        <Button
          id="component2"
          label={showLazy2 ? "Hide Component 2" : "Show Component 2"}
          onClick={() => toggleComponent2()}
        />
      </div>
      <div className="m-10">
        <Suspense fallback={<h1>Please wait ...</h1>}>
          {showLazy1 && <LazyComponent1 />}
          {showLazy2 && <LazyComponent2 />}
        </Suspense>
      </div>
    </Layout>
  );
};

export default Landing;
