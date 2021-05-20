import { useParams, Route } from "react-router-dom";
import Comments from "../components/comments/Comments";
const QuoteDetail = () => {
  const params = useParams();

  return (
    <>
      <section>
        <h1>Quote Detail Page</h1>
        <h2>{params.quoteId}</h2>
      </section>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
