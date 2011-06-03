# Markdown to HTML Notes

## Description

* Write markdown syntax.  
* Have guard/guard-shell catch the changes and run markdown.php against the .md file and create a corresponding .html file.

## Actors

* [Guard](https://github.com/guard/guard), [Guard-shell](https://github.com/guard/guard-shell)

* [PHP markdown extra](http://michelf.com/projects/php-markdown/extra/)

* jquery TOC plugin
    * <http://truthanduntruth.com/development/jquery/plugins/headerlinks/>

## Prerequisite software

* ruby (for Guard)

* php (for markdown.php)

* [rvm](https://rvm.beginrescueend.com/)

* [bundler](http://gembundler.com/)

* I've only tested the process on my MacBook Pro.

## Setup

1. clone [markdown-notes](https://github.com/markhaskamp/markdown-notes) project from github into _your directory_.

        git clone git@github.com:markhaskamp/markdown-notes.git .

2. from _your directory_

    2.1. set up your ruby gems

            gem install bundle
            rvm gemset create markdown_notes
            bundle install


## Process

1. Start Guard

        bundle exec guard

2. Create/edit files in the data/markdown/ directory

    2.1 For Guard to pick up your changes, the Markdown files need to have the .md extension.

3. Guard will detect the changes and create a corresponding file in the data/html_gen/ directory.

4. To create collapsible regions.

>>In the markdown file, surround the desired collapsible region with:

                <div markdown="1" class="collapse" title="your text here" collapse="true">
                ...
                </div>

>>>    collapse="true" is optional

## Links for Markdown syntax

* <http://en.wikipedia.org/wiki/Markdown>

* <http://cdn4.libsyn.com/howtube/Markdown_Cheat_Sheet.pdf>

