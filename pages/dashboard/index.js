import React, { useEffect } from "react";
import DashboardSection from "./../../components/DashboardSection";
import SignedoutSection from "./../../components/SignedoutSection";
import { useAuth } from "./../../util/auth.js";
import { useRouter } from "next/router";
import styled from "styled-components";

const LoaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: #fff;
  opacity: 0;
  z-index: -1;
  transition: opacity 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;

  .loader {
    height: 80px;
    width: 80px;
  }

  opacity: 1;
  z-index: 1;
`;

function DashboardPage(props) {
  const auth = useAuth();
  const router = useRouter();

  // Redirect to signin
  // if not signed in.
  useEffect(() => {
    if (auth.user === false) {
      router.push("/signin");
    }
  }, [auth, router]);
  if (!auth.user) {
    return (
      <div class="section">
        <div class="container">
          <div class="columns">
            <div class="column is-6 is-offset-3">
              <div class="box">
                <LoaderWrapper>
                  <div class="loader is-loading"></div>
                </LoaderWrapper>
              </div>
              <h2 class="title is-2">This is a Loading Box</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (auth.user) {
    return (
      <DashboardSection
        color="white"
        size="large"
        title="Dashboard"
        subtitle="Dashboard components are coming to the Divjoy library soon. For now, you can implement a custom dashboard here after exporting your code."
      />
    );
  }
}

export default DashboardPage;
