import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { marked } from 'marked';
import { IBlogPostProps, EBlogPost } from './types';
import preventingQuitting from '../../assets/blogs/preventingQuitting.md';
import incentiveProblem from '../../assets/blogs/incentiveProblem.md';

const useStyles = createUseStyles({
  container: {
    height: '100%',
    width: '600px',
  },
});

function BlogPost(props: IBlogPostProps): React.ReactElement {
  const [data, setData] = useState<string>();
  const { post } = props;
  const classes = useStyles();

  useEffect(() => {
    const loadBlog = async () => {
      switch (post) {
        case EBlogPost.INCENTIVE_PROBLEM:
          setData(await marked.parse(incentiveProblem));
          break;
        case EBlogPost.PREVENTING_QUITING:
        default:
          setData(await marked.parse(preventingQuitting));
          break;
      }
    };

    loadBlog();
  }, []);

  return (
    <div>
      <div
        className={classes.container}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: data ?? '' }}
      />
    </div>
  );
}

export default BlogPost;
