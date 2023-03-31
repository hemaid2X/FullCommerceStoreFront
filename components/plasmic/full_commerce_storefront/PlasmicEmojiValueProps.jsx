// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9ddDjPDiAQE72HUa13ENBq
// Component: FS4YaKb5wkXWx2
import * as React from "react";
import { useRouter } from "next/router";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import Value from "../../Value"; // plasmic-import: Nxkx2cRvEFZASy/component
import Button from "../../Button"; // plasmic-import: r98mWgbU1oG5dP/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_full_commerce_storefront.module.css"; // plasmic-import: 9ddDjPDiAQE72HUa13ENBq/projectcss
import sty from "./PlasmicEmojiValueProps.module.css"; // plasmic-import: FS4YaKb5wkXWx2/css
import PlaneIcon from "./icons/PlasmicIcon__Plane"; // plasmic-import: jRhTAQr1RCPXct/icon
import RightArrowIcon from "./icons/PlasmicIcon__RightArrow"; // plasmic-import: M7XzFR098hOVp4/icon
import DocumentIcon from "./icons/PlasmicIcon__Document"; // plasmic-import: OIeKbFGYdcBRBT/icon
import LockIcon from "./icons/PlasmicIcon__Lock"; // plasmic-import: 94cEWybR-9YH2L/icon

export const PlasmicEmojiValueProps__VariantProps = new Array();

export const PlasmicEmojiValueProps__ArgProps = new Array("children");

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

function PlasmicEmojiValueProps__RenderFunc(props) {
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
  return (
    <section
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
      {p.renderPlasmicSlot({
        defaultContents: (
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__omxTa)}
          >
            <Value
              children2={
                <Button
                  className={classNames("__wab_instance", sty.button___2OFdn)}
                  colors={"black"}
                  endIcon={
                    <RightArrowIcon
                      className={classNames(projectcss.all, sty.svg__sv03C)}
                      role={"img"}
                    />
                  }
                  rounded={true}
                  size={"large"}
                >
                  {"Read our letter"}
                </Button>
              }
              className={classNames("__wab_instance", sty.value__bahZ)}
              icon={
                <PlaneIcon
                  className={classNames(projectcss.all, sty.svg___3RxvS)}
                  role={"img"}
                />
              }
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___3FZw0
                )}
              >
                {"Worldwide shipping"}
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__lgLcA
                )}
              >
                {"Special financing and earn rewards."}
              </div>
            </Value>
            <Value
              children2={
                <Button
                  className={classNames("__wab_instance", sty.button___6JbF9)}
                  colors={"black"}
                  endIcon={
                    <RightArrowIcon
                      className={classNames(projectcss.all, sty.svg__cMxNi)}
                      role={"img"}
                    />
                  }
                  rounded={true}
                  size={"large"}
                >
                  {"Read our letter"}
                </Button>
              }
              className={classNames("__wab_instance", sty.value__u1VPx)}
              icon={
                <DocumentIcon
                  className={classNames(projectcss.all, sty.svg__ob4Aq)}
                  role={"img"}
                />
              }
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__skIwT
                )}
              >
                {"30-day guarantee"}
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___14PuV
                )}
              >
                {"Free return policy."}
              </div>
            </Value>
            <Value
              children2={
                <Button
                  className={classNames("__wab_instance", sty.button___5GIv4)}
                  colors={"black"}
                  endIcon={
                    <RightArrowIcon
                      className={classNames(projectcss.all, sty.svg__loQpg)}
                      role={"img"}
                    />
                  }
                  rounded={true}
                  size={"large"}
                >
                  {"Read our letter"}
                </Button>
              }
              className={classNames("__wab_instance", sty.value__yhlI)}
              icon={
                <LockIcon
                  className={classNames(projectcss.all, sty.svg__sFZiV)}
                  role={"img"}
                />
              }
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__mOuHq
                )}
              >
                {"Secured payments"}
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__uxjG5
                )}
              >
                {"We accept major credit cards."}
              </div>
            </Value>
          </p.Stack>
        ),

        value: args.children
      })}
    </section>
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicEmojiValueProps__ArgProps,
          internalVariantPropNames: PlasmicEmojiValueProps__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicEmojiValueProps__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicEmojiValueProps";
  } else {
    func.displayName = `PlasmicEmojiValueProps.${nodeName}`;
  }
  return func;
}

export const PlasmicEmojiValueProps = Object.assign(
  // Top-level PlasmicEmojiValueProps renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicEmojiValueProps
    internalVariantProps: PlasmicEmojiValueProps__VariantProps,
    internalArgProps: PlasmicEmojiValueProps__ArgProps
  }
);

export default PlasmicEmojiValueProps;
/* prettier-ignore-end */
