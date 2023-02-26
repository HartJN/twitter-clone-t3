import { useState, type FormEvent } from 'react';
import { z } from 'zod';
import { api } from '../utils/api';

export const tweetSchema = z.object({
  text: z
    .string({
      required_error: 'Your tweet is empty',
    })
    .min(2)
    .max(280),
});

export function CreateTweet() {
  const [text, setText] = useState<string>('');
  const [error, setError] = useState<string>('');

  const utils = api.useContext();

  const { mutateAsync } = api.tweet.create.useMutation({
    onSuccess: () => {
      setText('');
      utils.tweet.timeline.invalidate();
    },
  });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      tweetSchema.parse({ text });
    } catch (e: any) {
      setError(e.message);
      return;
    }

    mutateAsync({ text });
  }

  return (
    <>
      {error && <div>{error}</div>}
      <form
        onSubmit={handleSubmit}
        className="flex w-full flex-col rounded-md border-2 p-4"
        mb-4
      >
        <textarea
          onChange={(event) => setText(event.target.value)}
          className="w-full p-4 shadow"
        />

        <div className="mt-4 flex justify-end">
          <button
            className="rounded-md bg-primary px-4 py-2 text-white"
            type="submit"
          >
            Tweet
          </button>
        </div>
      </form>
    </>
  );
}
