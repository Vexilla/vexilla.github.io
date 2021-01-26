import Link from "components/link";
import Head from "next/head";

import styled from "styled-components";
import tw from "twin.macro";

import Header from "components/header";
import { Nav, InnerLink } from "components/common/header";

const PageWrapper = styled.div`
  ${tw`flex`}
`;

const Sidebar = styled.div`
  ${tw`p-4 w-1/4 overflow-scroll sticky`}

  top: 80px;
  max-height: calc(100vh - 80px);
`;

const SidebarNav = styled.nav`
  ${tw`flex flex-col bg-gray-100 rounded-lg py-4 px-8`}
`;

const SidebarLink = styled.a`
  ${tw`py-4`}
`;

const Content = styled.div`
  ${tw`flex-grow w-3/4`}
`;

const ContentSection = styled.section`
  ${tw`px-24 py-20`}
`;

export default function Documentation() {
  return (
    <>
      <Head>
        <title>Documentation | Vexilla</title>
      </Head>
      <Header>
        <Nav>
          <Link href="/documentation#api">
            <InnerLink>API Docs</InnerLink>
          </Link>
        </Nav>
      </Header>
      <PageWrapper>
        <Sidebar>
          <SidebarNav>
            <div className="prose flex flex-col">
              <h3>Table of Contents</h3>
              <ul>
                <li>
                  <Link href="/documentation#getting-started">
                    <SidebarLink>Getting Started</SidebarLink>
                  </Link>
                </li>

                <li>
                  <Link href="/documentation#client-libraries">
                    <SidebarLink>Client Libraries</SidebarLink>
                  </Link>
                </li>

                <li>
                  <Link href="/documentation#config-schema">
                    <SidebarLink>Config Schema</SidebarLink>
                  </Link>
                </li>

                <li>
                  <Link href="/documentation#feature-types">
                    <SidebarLink>Feature Types</SidebarLink>
                  </Link>
                </li>

                <li>
                  <Link href="/documentation#recipes">
                    <SidebarLink>Recipes</SidebarLink>
                  </Link>
                </li>
              </ul>
            </div>
          </SidebarNav>
        </Sidebar>
        <Content>
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
                The magic happens inside of the client libraries. They consume
                the static json config and perform all the significant logic. We
                are adding new client language support as fast as we can.
              </p>
              <ul>
                <li>JS/TS</li>
                <li>Elixir</li>
                <li>Python</li>
                <li>PHP</li>
                <li>C#</li>
                <li>Kotlin (Java)</li>
              </ul>
              <p>
                Don't see your language? Help us decide by voting with a thumbs
                up on the Github Project.
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
                Here you can find patterns and examples for how to use Vexilla
                to accomplish your goals.
              </p>

              <h4>
                Have a recipe you want to add? Let us know in a Github Issue or
                PR.
              </h4>
            </div>
          </ContentSection>

          <ContentSection>
            <div className="prose mx-auto pb-16">
              <h2>
                We are looking to improve our documentation all the time. Help
                us out by making suggestions.
              </h2>
            </div>
          </ContentSection>
        </Content>
      </PageWrapper>
    </>
  );
}
