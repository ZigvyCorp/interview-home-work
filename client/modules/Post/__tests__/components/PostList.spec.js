import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import PostList from '../../components/PostList';

const posts = [
  { name: 'Prashant', title: 'Hello Mern', id: 1, content: "All cats meow 'mern!'" },
  { name: 'Mayank', title: 'Hi Mern',  id: 2, content: "All dogs bark 'mern!'" },
];

test('renders the list', t => {
  const wrapper = shallow(
    <PostList posts={posts} handleShowPost={() => {}} handleDeletePost={() => {}} />
  );

  t.is(wrapper.find('PostListItem').length, 2);
});
