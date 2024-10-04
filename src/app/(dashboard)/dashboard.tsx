"use client";
// import node module libraries
import { Fragment, useState } from "react";
import Link from "next/link";
import { Container, Col, Row, Button } from "react-bootstrap";
import Popup  from "./components/popovers/popup";

// import widget/custom components
import { StatRightTopIcon } from "../../../widgets";

// import sub components
import {
  ActiveProjects,
  Teams,
  TasksPerformance,
} from "../../../sub-components";

// import required data files
import ProjectsStatsData from "../../../data/dashboard/ProjectsStatsData";

const DashBoard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);


  const handleCreateProject = () => {
    setCurrentProject(null); // Set null to indicate creating a new project
    setIsModalOpen(true);
  };

  return (
    <Fragment>
      <div className='bg-primary pt-10 pb-21'></div>
      <Container
        fluid
        className='mt-n22 px-6'>
        <Row>
          <Col
            lg={12}
            md={12}
            xs={12}>
            {/* Page header */}
            <div>
              <div className='d-flex justify-content-between align-items-center'>
                <div className='mb-2 mb-lg-0'>
                  <h3 className='mb-0  text-white'>Projects of Ky Vu</h3>
                </div>
                <div>
                  <Button
                    className='btn btn-white'
                    onClick={handleCreateProject}>
                    Create New Projects
                  </Button>
                </div>
              </div>
            </div>
          </Col>
          {ProjectsStatsData.map((item, index) => {
            return (
              <Col
                xl={3}
                lg={6}
                md={12}
                xs={12}
                className='mt-6'
                key={index}>
                <StatRightTopIcon info={item} />
              </Col>
            );
          })}
        </Row>

        <Popup isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)} />

        {/* Active Projects  */}
        <ActiveProjects />

        <Row className='my-6'>
          <Col
            xl={4}
            lg={12}
            md={12}
            xs={12}
            className='mb-6 mb-xl-0'>
            {/* Tasks Performance  */}
            <TasksPerformance />
          </Col>
          {/* card  */}
          <Col
            xl={8}
            lg={12}
            md={12}
            xs={12}>
            {/* Teams  */}
            <Teams />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default DashBoard;
