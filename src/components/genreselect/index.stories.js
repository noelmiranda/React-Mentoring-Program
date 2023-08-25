import React from "react";
// import { action } from "@storybook/addon-actions";
import GenreSelectView from "./index"; // Make sure to adjust the import path

export default {
  title: "Components/GenreSelectView", // The title for your Storybook section
  component: GenreSelectView,
};

const Template = (args) => <GenreSelectView {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithSelectedGenre = Template.bind({});
WithSelectedGenre.args = {
  selectedGenre: "DOCUMENTARY",
};

// Feel free to add more stories here with different scenarios if needed
