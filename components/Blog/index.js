import Head from 'next/head';
import PropTypes from 'prop-types';

const Blog = ({ result }) => (
  <>
    <Head>
      <title>My Blog</title>
    </Head>
    <div>
      Hello My Blog {result.author}
    </div>
  </>
);

Blog.defaultProps = {
  result: {author: ""},
};

Blog.propTypes = {
  result: PropTypes.object
};

export default Blog;
