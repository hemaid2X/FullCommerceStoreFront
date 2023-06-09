// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9ddDjPDiAQE72HUa13ENBq
// Component: 3G23XTaZlNcPFm
import * as React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import NavBar from "../../NavBar"; // plasmic-import: Xf2wx5iZAX-Wyy/component
import Button from "../../Button"; // plasmic-import: r98mWgbU1oG5dP/component
import { CategoryCollection } from "@plasmicpkgs/commerce"; // plasmic-import: ny07p45F84c_/codeComponent
import { CategoryField } from "@plasmicpkgs/commerce"; // plasmic-import: hzqiq--xdG5T/codeComponent
import { ProductCollection } from "@plasmicpkgs/commerce"; // plasmic-import: vU2jzVAnFP/codeComponent
import ProductCard from "../../ProductCard"; // plasmic-import: 7P4VbSUTHTWj1G/component
import Footer from "../../Footer"; // plasmic-import: agLchBvdK6c1SV/component
import { useScreenVariants as useScreenVariantszyMLegoUrZk6Ek } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: ZyMLegoUrZk6ek/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_full_commerce_storefront.module.css"; // plasmic-import: 9ddDjPDiAQE72HUa13ENBq/projectcss
import sty from "./PlasmicCategory.module.css"; // plasmic-import: 3G23XTaZlNcPFm/css

export const PlasmicCategory__VariantProps = new Array();

export const PlasmicCategory__ArgProps = new Array();

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());

const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicCategory__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useNextRouter();
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantszyMLegoUrZk6Ek()
  });
  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicCategory.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicCategory.pageMetadata.title}
        />

        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicCategory.pageMetadata.title}
        />

        <meta
          key="description"
          name="description"
          content={PlasmicCategory.pageMetadata.description}
        />

        <meta
          key="og:description"
          property="og:description"
          content={PlasmicCategory.pageMetadata.description}
        />

        <meta
          key="twitter:description"
          name="twitter:description"
          content={PlasmicCategory.pageMetadata.description}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <NavBar
            data-plasmic-name={"navBar"}
            data-plasmic-override={overrides.navBar}
            className={classNames("__wab_instance", sty.navBar)}
            searchOpen={true}
          />

          <section
            data-plasmic-name={"section"}
            data-plasmic-override={overrides.section}
            className={classNames(projectcss.all, sty.section)}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"container6"}
              data-plasmic-override={overrides.container6}
              hasGap={true}
              className={classNames(projectcss.all, sty.container6)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__uNfjv)}
              >
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__y97Ch)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__jK6YG
                    )}
                  >
                    {"Categories"}
                  </div>
                  <Button
                    className={classNames("__wab_instance", sty.button__z7Lmc)}
                    states={"active"}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__c6CqW
                      )}
                    >
                      {"All"}
                    </div>
                  </Button>
                  <CategoryCollection
                    data-plasmic-name={"categoryCollection"}
                    data-plasmic-override={overrides.categoryCollection}
                    className={classNames(
                      "__wab_instance",
                      sty.categoryCollection
                    )}
                    emptyMessage={
                      <ph.DataCtxReader>
                        {$ctx => (
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text___6Nr4A
                            )}
                          >
                            {"No collection found!"}
                          </div>
                        )}
                      </ph.DataCtxReader>
                    }
                    loadingMessage={
                      <ph.DataCtxReader>
                        {$ctx => (
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__fbm4U
                            )}
                          >
                            {"Loading..."}
                          </div>
                        )}
                      </ph.DataCtxReader>
                    }
                  >
                    <ph.DataCtxReader>
                      {$ctx => (
                        <Button
                          className={classNames(
                            "__wab_instance",
                            sty.button__pQmxk
                          )}
                        >
                          <CategoryField
                            data-plasmic-name={"categoryField"}
                            data-plasmic-override={overrides.categoryField}
                            className={classNames(
                              "__wab_instance",
                              sty.categoryField
                            )}
                            field={"name"}
                          />
                        </Button>
                      )}
                    </ph.DataCtxReader>
                  </CategoryCollection>
                </p.Stack>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox___4Vcf0)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__jlxrv
                    )}
                  >
                    {"Price"}
                  </div>
                  <Button
                    className={classNames("__wab_instance", sty.button__hD16)}
                  >
                    {"$0 - $50"}
                  </Button>
                  <Button
                    className={classNames("__wab_instance", sty.button__cOd0O)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___5EiYe
                      )}
                    >
                      {"$51 - $99"}
                    </div>
                  </Button>
                  <Button
                    className={classNames("__wab_instance", sty.button___1OhuV)}
                  >
                    {"$101+"}
                  </Button>
                </p.Stack>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__rdPz6)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__mxCqP
                    )}
                  >
                    {"Brands"}
                  </div>
                  <Button
                    className={classNames("__wab_instance", sty.button__oah2)}
                  >
                    {"Adidas"}
                  </Button>
                  <Button
                    className={classNames("__wab_instance", sty.button__xaaYg)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__myc24
                      )}
                    >
                      {"Asics"}
                    </div>
                  </Button>
                  <Button
                    className={classNames("__wab_instance", sty.button__lib6W)}
                  >
                    {"Crocs"}
                  </Button>
                  <Button
                    className={classNames("__wab_instance", sty.button__rl8Kg)}
                  >
                    {"Fila"}
                  </Button>
                  <Button
                    className={classNames("__wab_instance", sty.button__iYoVl)}
                  >
                    {"Nike"}
                  </Button>
                  <Button
                    className={classNames("__wab_instance", sty.button__rtzrU)}
                  >
                    {"Puma"}
                  </Button>
                  <Button
                    className={classNames("__wab_instance", sty.button__yqe4C)}
                  >
                    {"Reebok"}
                  </Button>
                </p.Stack>
              </p.Stack>
              <ProductCollection
                data-plasmic-name={"productCollection"}
                data-plasmic-override={overrides.productCollection}
                className={classNames("__wab_instance", sty.productCollection)}
                count={16}
                emptyMessage={
                  <ph.DataCtxReader>
                    {$ctx => (
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__stGd5
                        )}
                      >
                        {"No product found!"}
                      </div>
                    )}
                  </ph.DataCtxReader>
                }
                loadingMessage={
                  <ph.DataCtxReader>
                    {$ctx => (
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text___3C8L
                        )}
                      >
                        {"Loading..."}
                      </div>
                    )}
                  </ph.DataCtxReader>
                }
                sort={"price-asc"}
              >
                <ph.DataCtxReader>
                  {$ctx => (
                    <ProductCard
                      data-plasmic-name={"productCard"}
                      data-plasmic-override={overrides.productCard}
                      className={classNames("__wab_instance", sty.productCard)}
                      small={true}
                    />
                  )}
                </ph.DataCtxReader>
              </ProductCollection>
            </p.Stack>
          </section>
          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "navBar",
    "section",
    "container6",
    "categoryCollection",
    "categoryField",
    "productCollection",
    "productCard",
    "footer"
  ],

  navBar: ["navBar"],
  section: [
    "section",
    "container6",
    "categoryCollection",
    "categoryField",
    "productCollection",
    "productCard"
  ],

  container6: [
    "container6",
    "categoryCollection",
    "categoryField",
    "productCollection",
    "productCard"
  ],

  categoryCollection: ["categoryCollection", "categoryField"],
  categoryField: ["categoryField"],
  productCollection: ["productCollection", "productCard"],
  productCard: ["productCard"],
  footer: ["footer"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicCategory__ArgProps,
          internalVariantPropNames: PlasmicCategory__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicCategory__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCategory";
  } else {
    func.displayName = `PlasmicCategory.${nodeName}`;
  }
  return func;
}

export const PlasmicCategory = Object.assign(
  // Top-level PlasmicCategory renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navBar: makeNodeComponent("navBar"),
    section: makeNodeComponent("section"),
    container6: makeNodeComponent("container6"),
    categoryCollection: makeNodeComponent("categoryCollection"),
    categoryField: makeNodeComponent("categoryField"),
    productCollection: makeNodeComponent("productCollection"),
    productCard: makeNodeComponent("productCard"),
    footer: makeNodeComponent("footer"),
    // Metadata about props expected for PlasmicCategory
    internalVariantProps: PlasmicCategory__VariantProps,
    internalArgProps: PlasmicCategory__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "Category",
      description:
        "Inceptos tempor torquent tortor a aptent parturient a a himenaeos in ipsum ad vestibulum euismod ultrices dis vulputate vestibulum non adipiscing.",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicCategory;
/* prettier-ignore-end */
