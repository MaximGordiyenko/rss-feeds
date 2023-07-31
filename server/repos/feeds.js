import { db } from "../db.js";
import { queryParser } from '../utils/utils.js';

const createTableFeedsPath = 'query/feeds/createFeedsTable.sql';
const getAllFeedsPath = 'query/feeds/getAllFeeds.sql';
const feedsInsertPath = 'query/feeds/insertFeeds.sql';
const feedsDeletePath = 'query/feeds/deleteFeed.sql';
const feedsUpdatePath = 'query/feeds/updateFeed.sql';
const feedsSortDescPath = 'query/feeds/sortDesc.sql';
const feedsSortAscPath = 'query/feeds/sortAsc.sql';
const feedsFilterTitlePath = 'query/feeds/filterTitle.sql';

export const Feeds = (() => {
  const createTableFeeds = async () => {
    try {
      const data = await queryParser(createTableFeedsPath);
      await db.query(data);
    } catch (error) {
      throw error;
    }
  };
  
  const find = async () => {
    try {
      const data = await queryParser(getAllFeedsPath);
      const { rows } = await db.query(data);
      return rows;
    } catch (error) {
      throw error;
    }
  };
  
  const insert = async (title, pubdate, isodate, link, contentsnippet, content, author) => {
    try {
      const data = await queryParser(feedsInsertPath);
      const { row } = await db.query(data, [title, pubdate, isodate, link, contentsnippet, content, author]);
      return row;
    } catch (error) {
      throw error;
    }
  };
  
  const deleteFeed = async (id) => {
    try {
      const data = await queryParser(feedsDeletePath);
      const { row } = await db.query(data, [id]);
      return row;
    } catch (error) {
      throw error;
    }
  };
  
  const update = async (id, title, content, author) => {
    try {
      const data = await queryParser(feedsUpdatePath);
      const { row } = await db.query(data, [id, title, content, author]);
      return row;
    } catch (error) {
      throw error;
    }
  };
  
  const sortTitleDesc = async () => {
    try {
      const data = await queryParser(feedsSortDescPath);
      const { rows } = await db.query(data);
      return rows;
    } catch (error) {
      throw error;
    }
  };
  
  const sortTitleAsc = async () => {
    try {
      const data = await queryParser(feedsSortAscPath);
      const { rows } = await db.query(data);
      return rows;
    } catch (error) {
      throw error;
    }
  };
  
  const filterTitle = async (title) => {
    try {
      const data = await queryParser(feedsFilterTitlePath);
      const { rows } = await db.query(data, [title]);
      return rows;
    } catch (error) {
      throw error;
    }
  };
  
  return {
    createTableFeeds,
    find,
    insert,
    deleteFeed,
    update,
    sortTitleDesc,
    sortTitleAsc,
    filterTitle,
  };
})();
