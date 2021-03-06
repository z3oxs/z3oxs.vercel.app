// @ts-ignore
import MetaTags from 'react-meta-tags';

export const First = () => (
    <>
        <MetaTags>
            <meta name="description" content="First post ever!!" />
            <meta name="og:description" content="First post ever!!" />
            <meta name="image" content="https://images.pexels.com/photos/428429/pexels-photo-428429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <meta name="og:image" content="https://images.pexels.com/photos/428429/pexels-photo-428429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <meta name="og:site_name" content="z3oxs's Blog" />
            <meta name="title" content="First post ever" />
            <meta name="og:title" content="First post ever" />
            <title>First post ever | z3oxs</title>
        </MetaTags>

        <div className="title">
            <h1>First post ever!! :)</h1>
            <span>June 16 21:25</span>
        </div>

        <hr />

        <div className="pilot">
            <img
                src="https://images.pexels.com/photos/428429/pexels-photo-428429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                width="800"
                alt="Dark forest"
                title="Dark forest"
            />
            <span>
                Dark forest. <a
                    href="https://www.pexels.com/photo/trees-under-cloudy-sky-428429/"
                    target="_blank"
                >
                    Source
                </a>
            </span>
        </div>

        <div className="content">
            <p>
                This is the first post ever from my personal blog. Into that blog, I'll address topics about
                programming and technologies on general. Feel free to share and recommend new ideas and topics.
                So, much thanks for reading this, have a nice day/afternoon/night :)!
            </p>
        </div>
    </>
);
