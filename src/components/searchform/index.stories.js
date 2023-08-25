import React from "react";
import SearchFormView from "./SearchForm"; // Make sure to adjust the import path

export default {
  title: "Components/SearchForm", // The title for your Storybook section
  component: SearchFormView,
};

const Template = (args) => <SearchFormView {...args} />;

export const Default = Template.bind({});
Default.args = {
  initialSearchQuery: "",
  onSearch: (query) => console.log(`Searching for: ${query}`),
};

export const WithInitialQuery = Template.bind({});
WithInitialQuery.args = {
  initialSearchQuery: "Action movies",
  onSearch: (query) => console.log(`Searching for: ${query}`),
};

export const EmptyQuery = Template.bind({});
EmptyQuery.args = {
  initialSearchQuery: "",
  onSearch: (query) => console.log(`Searching for: ${query}`),
};

export const LongQuery = Template.bind({});
LongQuery.args = {
  initialSearchQuery: "This is a really long search query",
  onSearch: (query) => console.log(`Searching for: ${query}`),
};
