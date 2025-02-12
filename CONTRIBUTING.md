# Contributing

## Scripts

```bash
# install
npm i --legacy-peer-deps

# run development env
npm run dev

# build
npm run build

# lint
npm run lint

# test (storybook must be running)
npm run test

# generate new tokens scss files
npm run build:tokens

# format all files with prettier
npm run format
```

## Guidelines

1. Commits
   1. Commit messages MUST use [Conventional Commit format](https://www.conventionalcommits.org).
   1. [Certain commit types](https://semantic-release.gitbook.io/semantic-release/#commit-message-format) like `fix:` (patch), `feat:` (minor), and `perf:` (major) or `BREAKING CHANGE:` (in the commit body or footer, major), will automatically trigger a release to publish a new package and update the semantic version.
   1. [Conventional Commits Cheat Sheet](https://gist.github.com/Zekfad/f51cb06ac76e2457f11c80ed705c95a3)
   1. Git hooks are installed to enforce commit message formatting with commitlint, and code formatting with Prettier.
1. Branching
   1. `main` branch is for stable/current version changes.
   1. `beta` branch is for future version/prerelease/breaking changes.
   1. Prefix your branch names based on the type of change, ex `feature/`, `bugfix/`, or `hotfix/`.
   1. Use the [GitHub Flow](https://docs.github.com/en/get-started/quickstart/github-flow).
      ![image](https://i0.wp.com/build5nines.com/wp-content/uploads/2018/01/GitHub-Flow.png)
1. Code Review
   1. Always have someone peer review your PR.
   1. Status checks must pass.
   1. Strongly recommend using the [Prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) to ensure consistent formatting.
1. Releases
   1. Releases will trigger automatically when the right commit messages are pushed to `main` or `beta`.
   1. All testing must be done on the PR level before merging, since the release will happen automatically after merge.
1. Testing
   1. We use [@storybook/test](https://storybook.js.org/docs/writing-tests) to execute a variety of automated tests.
      1. The [Test Runner](https://storybook.js.org/docs/writing-tests/test-runner) is used to execute Accessibility and Interaction tests both locally and in CI.
      1. [Accessibility Tests](https://storybook.js.org/docs/writing-tests/accessibility-testing)
   1. [Visual Testing via Chromatic](https://www.chromatic.com/)
      1. Provides visual screenshot comparison testing and a review process which integrates with our CI.
1. Updating Color Tokens
   1. **TL;DR:** Everything is automagically updated and a PR is created when designers push token changes from Figma.
   1. Designers will manage all of our tokens for the Color Palette and the Light/Dark Themes within [Figma's Tokens Studio plugin](https://tokens.studio/).
   1. Designers will push token changes directly to the `tokens` branch in GitHub using Tokens Studio.
   1. Tokens are stored in a standardized JSON format called [W3C DTCG](https://tr.designtokens.org/format/).
   1. Typically, a library called [Style Dictionary](https://amzn.github.io/style-dictionary/) would be used to transform the JSON into code. In this case, I wanted a special format that library does not support, CSS `light-dark()` syntax, so I wrote a custom build script.
   1. When files in the `tokens` folder are pushed, I wrote a GitHub Actions workflow called `update-tokens` which will then kick in and automatically run the `build:tokens` script to generate the new CSS variables files, which will then be committed back to the `tokens` branch.
   1. A PR will be automatically generated so we can review & approve before merging from the `tokens` branch to the release branch.
      1. Use the "Update Branch" button in GitHub to pull in the latest from the release branch.
      1. After merge, the `tokens` branch may get deleted automatically. Restore it for future use.

## Third-Party Docs Reference

1. [Lit](https://lit.dev/docs/)
1. [Storybook](https://storybook.js.org/docs/7.0/web-components/get-started/introduction)
1. [@storybook/test](https://storybook.js.org/docs/writing-tests)
1. [SCSS](https://sass-lang.com/guide)
1. [TypeScript](https://www.typescriptlang.org/docs/)
1. [Rollup](https://rollupjs.org/guide/en/)
