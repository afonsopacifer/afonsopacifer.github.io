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
import renderHighlights from '../bosons/helpers/renderHighlights';
import Github from '../assets/icons/github.svg';
import Codepen from '../assets/icons/codepen.svg';

const Projects = () => {

  return (
    <DefaultLayout>

      <SEO title = 'Projects' />

      <PageHeader>

        <h1 className = 'heading heading--lv1 heading--gradient'>
          Personal projects and open source initiatives in companies.
        </h1>

        <p className = 'text'>
          I love learning about new technologies by creating my own developer tools, this passion made me <a href='https://dev.to/afonsopacifer/how-i-became-a-senior-javascript-developer-with-personal-projects-1lpo' target = '_blnak' className = 'link'>a senior javascript developer with personal projects</a>.
        </p>

        <p className = 'text'>
          One interesting thing about my career is that I started and maintained <b className = 'text--highlight'>open source</b> projects at <b className = 'text--highlight'>every company</b> I worked for.
        </p>

        {/* <CommentBar title = '⚠️ Disclaimer!'>
          Below I list some projects that are no longer open, in these cases I added a case study explaining my <b className = 'text--highlight'>architectural</b> decisions, <b className = 'text--highlight'>technology</b> choices and development <b className = 'text--highlight'>process.</b>
        </CommentBar> */}

        <Link href = 'https://github.com/afonsopacifer'> 
          <Github />
          Follow me on Github / <b className = 'text--highlight'>+1.3k Followers</b>
        </Link>

        <Link href = 'https://codepen.io/afonsopacifer'> 
          <Codepen />
          Follow me on Codepen / <b className = 'text--highlight'>+100k views</b>
        </Link>

      </PageHeader>

      <h2 className = 'heading heading--lv2'>
        <strong className = 'heading--underline'> Featured </strong> personal projects.
      </h2>

      <section className = 'feature-box-container'>
        { renderHighlights(projects) }
      </section>

      { renderSections(projects) }

    </DefaultLayout>
  );

}

export default Projects;
