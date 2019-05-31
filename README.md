# Speech Time

Speech Time helps you figure out how long it would take to deliver the written text in a file.

Anybody writing scripts for a speech, presentation, or talk may find it useful.
It tells you how long - in minutes - the text will take to read out loud in various rates of speed.

## Features

This extension helps you estimate how many minutes a script will take to deliver.

- Estimate text in current file
- Estimate selected text
- Default speeds let help you know how long it may take depending on your speaking speed.

> Tip: New speakers tend to speak quickly, packing more words per minute. As you gain experience speaking, pacing and estimates become second nature. For best results, practice your speech end to end many times, and note the actual duration. You can then derive your own speech rate and configure this extension with that number.

## Requirements

None.

## Extension Settings

You can change the default speech rates used for calculating the duration.

The speech rates correspond to 3 levels: _slow_, _medium_ and _fast_. These are based on average English rates, in Words Per Minute (wpm).

| Label | Setting | Default Value|
|--- |--- |--- |
|**slow**  | `speechTimer.wpm.slow`   | 100 |
|**medium**| `speechTimer.wpm.medium` | 135 |
|**fast**  | `speechTimer.wpm.fast`   | 170 |

You can adjust these by supplying a different integer number to any of these.

> TIP: Deliver your speech out loud a few times, and note the length of your delivery style. Then change the 'medium' value to your measured rate, and set the fast or slow rates to %25 more or less than your actual rate.

## Known Issues

The extension word count calculation is based on a simplistic strategy: Any one-or-more word contiguous characters is considered a word. This has some drawbacks, notably:

- It includes code, scripts, and tags in the count
- It includes in the count things you might not consider spoken words. For example "0XBEEF (hex)" would count as 2 words.

This extension considers these potential words an acceptable inaccuracy for the sake of performance. Also, since the estimates are, well, _estimates_ , you should them with a grain of salt anyway.

> TIP: The longer your script is, the more likely the estimates to be accurate.

----

## Release Notes

### 0.9.1

- Package dependency update by npm audit.

### 0.9.0

- Initial release
