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

  if (title.length !== '' && title.length <= 3) {
    return 'Error! Title must contain more than 3 letters';
  }

  if (description.length !== '' && description.length <= 10) {
    return 'Error! Description must contain more than 10 letters';
  }
};

const postsValidationHelpers = {
  validatePost,
};

export default postsValidationHelpers;
