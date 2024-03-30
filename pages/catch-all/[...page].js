import {useRouter} from "next/router";
import LodashPage from "../../components/lodashPage";
import MomentPage from "../../components/momentPage";
import D3Page from "../../components/D3Page";

const CatchAllPage = () => {
  const router = useRouter();
  const { page } = router.query;

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (page?.[0] === 'lodash') {
    return <LodashPage />
  }

  if (page?.[0] === 'moment') {
    return <MomentPage />
  }

  if (page?.[0] === 'd3') {
    return <D3Page />
  }

  if (page?.[0] === 'all') {
    return <><MomentPage /><LodashPage/></>
  }

  return <h1>Generic page</h1>;
}

export default CatchAllPage;