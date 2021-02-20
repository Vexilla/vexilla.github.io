import DocumentationLayout from "components/documentation-layout";
import styled from "styled-components";
import tw from "twin.macro";
// import Link from "components/link";
import Link from "next/link";

const ContentSection = styled.section`
  ${tw`px-24 py-20`}
`;

const ClientLanguage = styled.span`
  ${tw`font-bold inline-block`}

  width: 100px;
  margin-top: 0 !important;
`;

const clients = [
  {
    language: "JS/TS",
    github: "https://github.com/vexilla/client-js",
    repository: "npm",
    repositoryLink: "https://npmjs.org/@vexilla/client",
  },
  {
    language: "Elixir",
    github: "https://github.com/vexilla/client-elixir",
    repository: "hex.pm",
    repositoryLink: "https://hex.pm/packages/vexilla_client_elixir",
  },
  {
    language: "PHP",
    github: "https://github.com/vexilla/client-php",
    repository: "Packagist",
    repositoryLink: "https://packagist.org/packages/vexilla/client",
  },
  {
    language: "Python",
    github: "https://github.com/vexilla/client-python",
    repository: "pypi",
    repositoryLink: "https://pypi.org/project/vexilla-client/",
  },
  {
    language: "C#",
    github: "https://github.com/vexilla/client-csharp",
    repository: "NuGet",
    repositoryLink: "https://www.nuget.org/packages/Vexilla.Client",
  },
  {
    language: "Go",
    github: "https://github.com/vexilla/client-go",
    repository: "pkg.go.dev",
    repositoryLink: "https://pkg.go.dev/github.com/vexilla/client-go",
  },
  {
    language: "Rust",
    github: "https://github.com/vexilla/client-rust",
    repository: "crates.io",
    repositoryLink: "https://crates.io/vexilla_client",
  },
  {
    language: "Ruby",
    github: "https://github.com/vexilla/client-ruby",
    repository: "RubyGems",
    repositoryLink: "https://rubygems.org/gems/vexilla_client",
  },
  {
    language: "lua",
    github: "https://github.com/vexilla/client-lua",
    repository: "luarocks",
    repositoryLink: "https://luarocks.org/modules/cmgriffing/vexilla_client",
  },
  {
    language: "Kotlin (Java)",
    github: "https://github.com/vexilla/client-kotlin",
    repository: "Maven",
    repositoryLink: "",
  },
];

export default function Documentation() {
  return (
    <DocumentationLayout
      meta={{
        title: "Documentation | Vexilla",
      }}
    >
      <div className="px-24 pt-20 pb-0">
        <div className="prose mx-auto">
          <h1>Documentation</h1>
        </div>
      </div>
      <ContentSection id="getting-started">
        <div className="prose mx-auto">
          <h2>Getting Started</h2>
          <p>To get started follow these simple steps.</p>

          <ol>
            <li>Open the Config application</li>
            <li>Create Environments and Features in the app</li>
            <li>
              Generate credentials for uploading from the app based on your
              provider of choice
            </li>
            <li>Install a client library for your language</li>
            <li>Wrap functionality in a "should"</li>
          </ol>
        </div>
      </ContentSection>

      <ContentSection id="client-libraries">
        <div className="prose mx-auto">
          <h2>Client Libraries</h2>
          <p>
            The magic happens inside of the client libraries. They consume the
            static json config and perform all the significant logic. We are
            adding new client language support as fast as we can.
          </p>
          <ul>
            {clients.map((client) => {
              return (
                client.repositoryLink && (
                  <li>
                    <ClientLanguage>{client.language}</ClientLanguage>
                    <a className="mx-2" href={client.github} target="_blank">
                      Github
                    </a>
                    <a
                      className="mx-2"
                      href={client.repositoryLink}
                      target="_blank"
                    >
                      {client.repository}
                    </a>
                  </li>
                )
              );
            })}
          </ul>
          <p>
            Don't see your language? Help us decide by voting with a thumbs up
            on the Github Project.
          </p>
        </div>
      </ContentSection>

      <ContentSection id="config-schema">
        <div className="prose mx-auto">
          <h2>Config Schema</h2>
          <p>This is what the json payload schema looks like.</p>

          <pre>
            <code>
              {`
{
  environments: {
    [environmentName: string]: {
      [featureSetName: string]: { // currently hardcoded to "untagged"
        [featureName: string]:
          | VexillaToggleFeature
          | VexillaGradualFeature
          | VexillaSelectiveFeature;
      }
    };
  }
}
                  `}
            </code>
          </pre>
        </div>
      </ContentSection>

      <ContentSection id="feature-types">
        <div className="prose mx-auto">
          <h2>Feature Types</h2>
          <p>Other feature types are being considered.</p>
          <pre>
            <code>
              {`
enum VexillaFeatureType {
  TOGGLE = "toggle",
  GRADUAL = "gradual",
  SELECTIVE = "selective",
}

interface VexillaToggleFeature {
  type: VexillaFeatureType.TOGGLE;
  value: boolean;
}

interface VexillaGradualFeature {
  type: VexillaFeatureType.GRADUAL;
  value: number;
  seed: number;
}
                `}
            </code>
          </pre>
        </div>
      </ContentSection>

      <ContentSection id="recipes">
        <div className="prose mx-auto">
          <h2>Recipes</h2>
          <p>
            Here you can find patterns, recommendations, examples for how to use
            Vexilla to accomplish your goals.
          </p>

          <ul>
            <li>
              <Link href="/documentation/recipes/long-polling">
                Caching - Long Polling
              </Link>
            </li>
            <li>
              <Link href="/documentation/recipes/response-codes">
                Server Status Codes
              </Link>
            </li>
          </ul>

          <h4>
            Have a recipe you want to add? Let us know in a Github Issue or PR.
          </h4>
        </div>
      </ContentSection>

      <ContentSection>
        <div className="prose mx-auto pb-16">
          <h2>
            We are looking to improve our documentation all the time. Help us
            out by making suggestions.
          </h2>
        </div>
      </ContentSection>
    </DocumentationLayout>
  );
}
