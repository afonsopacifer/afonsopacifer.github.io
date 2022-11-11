import React from 'react';
import DefaultLayout from '../templates/default-layout';
import '../atoms/headings/headings.css';
import '../atoms/text/text.css';
import projects from '../data-base/projects.json';
import renderSections from '../bosons/helpers/renderSections';
import SEO from '../bosons/seo';
import Link from '../atoms/link/';
import CommentBar from '../atoms/comment-bar';
import PageHeader from '../organisms/page-header/';
import Github from '../assets/icons/github.svg';
import Codepen from '../assets/icons/codepen.svg';

const Projects = () => {

  return (
    <DefaultLayout>

      <SEO title = 'Projects' />

      <PageHeader>

        <h1 className = 'heading heading--lv1'>
          <strong className = 'heading--underline'> Side </strong> projects and open source initiatives in companies.
        </h1>

        <p className = 'text'>
          I love open source and code for fun, this passion made me <a href='https://dev.to/afonsopacifer/how-i-became-a-senior-javascript-developer-with-personal-projects-1lpo' target = '_blnak' className = 'link'>a senior javascript developer with personal projects</a>.
        </p>

        <p className = 'text'>
          I started and maintained <b className = 'text--highlight'>open source projects in every company</b> I worked for.
        </p>

        <CommentBar title = '⚠️ Disclaimer!'>
          I list below only company projects that I still mantain or my personal projects.
        </CommentBar>

        <Link href = 'https://github.com/afonsopacifer'> 
          <Github />
          Follow me on Github / <b className = 'text--highlight'>+1.3k Followers</b>
        </Link>

        <Link href = 'https://codepen.io/afonsopacifer'> 
          <Codepen />
          Follow me on Codepen / <b className = 'text--highlight'>+100k views</b>
        </Link>

      </PageHeader>

      { renderSections(projects) }

    </DefaultLayout>
  );

}

export default Projects;
