import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const portfolioDirectory = path.join(process.cwd(), "portfolio");

export function getSortedPortfolioData() {
  // Get file names under /portfolio
  const fileNames = fs.readdirSync(portfolioDirectory);
  const allPortfolioData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(portfolioDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the portfolio metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });
  // Sort portfolio by date
  return allPortfolioData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
}

export function getPortfolioIds() {
  const fileNames = fs.readdirSync(portfolioDirectory);
  const fileMap = fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
  return fileMap;
}

export async function getPortfolioData(id) {
  const fullPath = path.join(portfolioDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, `utf8`);
  const matterResult = matter(fileContents);
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
