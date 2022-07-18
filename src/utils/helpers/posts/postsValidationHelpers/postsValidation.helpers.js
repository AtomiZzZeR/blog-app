const validatePost = ({ title, description }) => {
  if (title === '' && description === '') {
    return 'Error! Empty title and description of the post';
  }

  if (title === '') {
    return 'Error! Empty title of the post';
  }

  if (description === '') {
    return 'Error! Empty description of the post';
  }
};

const postsValidationHelpers = {
  validatePost,
};

export default postsValidationHelpers;
