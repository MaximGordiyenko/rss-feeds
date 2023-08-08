import express from 'express';
import Parser from 'rss-parser';
import CronJob from 'node-cron';
import { Feeds } from '../repos/feeds.js';

const router = express.Router();

const parseRSSFeed = async () => {
  const parser = new Parser();
  try {
    const feed = await parser.parseURL('https://www.reddit.com/.rss');
    return feed.items.forEach(el => Feeds.insert(el.title, el.pubDate, el.isoDate, el.link, el.contentSnippet, el.content, el.author));
  } catch (error) {
    console.error('Error parsing RSS feed:', error);
  }
};

router.get('/feed', async (req, res) => {
  try {
    // CronJob.schedule('*/1 * * * *', () => {
    //   parseRSSFeed();
    // console.log('RSS parser started.');
    // });
    
    
    const feeds = await Feeds.find();
    res.status(200).send(feeds);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete('/feed/:id', async (req, res) => {
  const { id } = req.params;
  await Feeds.deleteFeed(id);
  res.status(200).send(req.params.id);
});

router.put('/feed/:id', async (req, res) => {
  const { id } = req.params;
  const { title, content, author } = req.body;
  await Feeds.update(id, title, content, author);
  res.status(200);
});

router.get('/feed/sort/desc', async (req, res) => {
  const feeds = await Feeds.sortTitleDesc();
  res.status(200).send(feeds);
});

router.get('/feed/sort/asc', async (req, res) => {
  const feeds = await Feeds.sortTitleAsc();
  res.status(200).send(feeds);
});

router.get('/feed/filter', async (req, res) => {
  const { title } = req.query;
  const feeds = await Feeds.filterTitle(title);
  res.status(200).send(feeds);
});

export default router;
