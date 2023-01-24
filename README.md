
# Finwe



This application is named after the King of the Noldor in Tolkien's books. He was the first to sail from Middle-Earth to Valinor on the First Age, father of Fëanor, who created the Silmarils.

I named it this way because this will be a huge ass boilerplate for many other applications due to re-usability, structure and ease of customization.

Most of these functionalities are separate packages or frameworks, which are the following:




## The Current Stack

### Turborepo

[Turborepo](https://vercel.com/docs/concepts/monorepos) is a Vercel developed monorepo package to allow us to manage multiple projects in a single directory. In our case, we will be using Turborepo as a boilerplate-esque framweork, so we don't have to set up any configurations and have the same clean architecture for every single web app that is forked from Fimwe.


 **Apps and Packages**



- `docs`: a [Next.js](https://nextjs.org/) app

- `web`: another [Next.js](https://nextjs.org/) app. We will explore this further below

- `ui`: a stub React component library shared by both `web` and `docs` applications

- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)

- `tsconfig`: `tsconfig.json`s used throughout the monorepo




Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).



### Utilities



- [TypeScript](https://www.typescriptlang.org/) for static type checking

- [ESLint](https://eslint.org/) for code linting

- [Prettier](https://prettier.io) for code formatting

- [Jest](https://jestjs.io/) for unit testing

- and a few more things like husky for pre-commit linting and scripting


### Building and running


    $ npm i
    $ yarn run build
    $ yarn run dev



### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
$ cd finwe
$ npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your turborepo:



```
$ npx turbo link
```
## The 'web' application

This application is the one where we will do most of the work. Our structure will work as follows:
- Any static text is bundled by language on `/bundle/{language}.js`so that we have a bit of leeway if a multi-language application is needed.
- `/pages` is where our routes will go
- `/components` is where our components will go and so on..

You get the point, right?

## Useful Links


Turborepo:

- [Pipelines](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)

- [Caching](https://turbo.build/repo/docs/core-concepts/caching)

- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)

- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)

- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)

- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)


