# Portfolio

Built using Typerscript (React) and Tailwind CSS.

## Live working URL 👇

[harshitbhardwaj.netlify.app](https://harshitbhardwaj.netlify.app)

## Run the app locally using Docker

For this docker must be installed on your system. You can get it from [here](https://docs.docker.com/get-docker/).

To run the app -

- Pull the latest image from dockerhub, by executing :

```
docker pull harshitbhardwaj97/portfolio:latest
```

- You can also build the image locally by running :

```
docker build . -t portfolio
```

Here instead of "portfolio", you can give image any name accordingly.

- Once you have got the image (either by pulling or building locally), run it by :

```
docker run -d --rm -p 5173:5173 harshitbhardwaj97/portfolio
```

This will start the app on http://localhost:5173

NOTE: The above build command is based on the assumption that you pulled the image, in case you built it locally with different name and want to run it on a different port (other than 5173), then you would have to make appropriate changes in the above command. (Change the image name, port number)
