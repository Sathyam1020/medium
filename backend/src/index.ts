import { Hono } from 'hono'
import {userRouter} from "./routes/user";
import {blogRouter} from "./routes/blog";

const app = new Hono();

app.get('/', (c) => {
  return c.text('Hello world!')
})

app.route('/api/v1/user', userRouter);
app.route('/api/v1/blog', blogRouter);

export default app;