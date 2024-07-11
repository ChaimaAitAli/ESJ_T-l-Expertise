"use client";
import { useState, useEffect } from "react";
import Sidebar from "@components/Sidebar";
import "@assets/css/style.css";
import Link from "next/link";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import DiscussionCree from "@/components/DiscussionCree";
import DiscussionPlanifiee from "@components/DiscussionPlanifiee";
import DiscussionTerminee from "@components/DiscussionTerminee";
import Invitation from "@components/Invitation";

const discussionsCrees = [
  {
    id: 1,
    title: "Irritation cutanée",
    description: "Discuter blabla",
    neededSpecialities: ["Dermatologue"],
    acceptedInvitations: ["Dr. Smith"],
    rejectedInvitations: ["Dr. Doe"],
    date: "21/02/2024",
    time: "21:00",
  },
  {
    id: 2,
    title: "Microbe dentaire",
    description:
      "Discutons du cas d'un patient souffrant d'une irritation cutanée. Cette discussion abordera les causes potentielles.",
    neededSpecialities: ["Dentiste"],
    acceptedInvitations: ["Dr. Brown"],
    rejectedInvitations: ["Dr. Green"],
    date: "21/08/2024",
    time: "17:00",
  },
  {
    id: 3,
    title: "Infection rare",
    description:
      "Discutons du cas d'un patient souffrant d'une irritation cutanée. Cette discussion abordera les causes potentielles.",
    neededSpecialities: ["Urologue"],
    acceptedInvitations: ["Dr. Brown", "Dr. Smith"],
    rejectedInvitations: ["Dr. Green"],
    date: "11/07/2024",
    time: "12:10",
  },
  {
    id: 4,
    title: "Infection rare",
    description:
      "Discutons du cas d'un patient souffrant d'une irritation cutanée. Cette discussion abordera les causes potentielles.",
    neededSpecialities: ["Urologue"],
    acceptedInvitations: ["Dr. Brown", "Dr. Smith"],
    rejectedInvitations: ["Dr. Green"],
    date: "11/07/2024",
    time: "12:10",
  },
];

const discussionsPlanifiees = [
  {
    id: 1,
    title: "Irritation cutanée",
    MainDoctor: "Kawtar Debbar",
    neededSpecialities: ["Dermatologue"],
    date: "21/02/2024",
    time: "21:00",
  },
  {
    id: 2,
    title: "Microbe dentaire",
    MainDoctor: "Dr. Mourad Elbacha",
    neededSpecialities: ["Dentiste"],
    date: "21/08/2024",
    time: "17:00",
  },
  {
    id: 3,
    title: "Infection rare",
    MainDoctor: "Dr. Rachid Elhilali",
    neededSpecialities: ["Dentiste"],
    date: "11/07/2024",
    time: "12:10",
  },
  {
    id: 4,
    title: "Infection rare",
    MainDoctor: "Dr. Issam Elmissaoui",
    neededSpecialities: ["Urologue"],
    date: "11/07/2024",
    time: "12:10",
  },
];

const discussionsTerminees = [
  {
    id: 1,
    title: "Irritation cutanée",
    MainDoctor: "Kawtar Debbar",
    DoctorsWhoAttended: ["Dr.Smith", "Dr.Brown"],
    date: "21/02/2024",
    time: "21:00",
    compteRendu: "",
  },
  {
    id: 2,
    title: "Microbe dentaire",
    MainDoctor: "Dr. Mourad Elbacha",
    DoctorsWhoAttended: ["Dr.Smith", "Dr.Brown"],
    date: "21/08/2024",
    time: "17:00",
    compteRendu: "",
  },
  {
    id: 3,
    title: "Infection rare",
    MainDoctor: "Dr. Rachid Elhilali",
    DoctorsWhoAttended: ["Dr.Said Elmouakil", "Dr.Salma Elmonakhi"],
    date: "11/07/2024",
    time: "12:10",
    compteRendu: "",
  },
  {
    id: 4,
    title: "Infection rare",
    MainDoctor: "Dr. Issam Elmissaoui",
    DoctorsWhoAttended: ["Dr.Hicham ElAmrani", "Dr.Mourad Berada"],
    date: "11/07/2024",
    time: "12:10",
    compteRendu: "",
  },
];
const invitations = [
  {
    id: 1,
    title: "Irritation cutanée",
    description:
      "Discutons du cas d'un patient souffrant d'une irritation cutanée. Cette discussion abordera les causes potentielles, les symptômes et les traitements",
    doctor: "Aymane El bazi",
    doctorSpeciality: "Chirurgien",
    date: "21/02/2024",
    time: "11:00",
  },
  {
    id: 2,
    title: "Microbe dentaire",
    description:
      "Discutons du cas d'un patient souffrant d'une irritation cutanée. Cette discussion abordera les causes potentielles.",
    doctor: "Elbachir Janah",
    doctorSpeciality: "Chirurgien",
    date: "21/08/2024",
    time: "10:30",
  },
  {
    id: 3,
    title: "Microbe dentaire",
    description:
      "Discutons du cas d'un patient souffrant d'une irritation cutanée. Cette discussion abordera les causes potentielles, les symptômes et les traitements de l'irritation.",
    doctor: "Issam Elmonakhi",
    doctorSpeciality: "Dermatologue",
    date: "10/09/2024",
    time: "10:00",
  },
  {
    id: 4,
    title: "Microbe dentaire",
    description:
      "Discutons du cas d'un patient souffrant d'une irritation cutanée. Cette discussion abordera les causes potentielles, les symptômes et les traitements de l'irritation.",
    doctor: "Salma Elmonakhi",
    doctorSpeciality: "Cardiologue",
    date: "10/09/2024",
    time: "10:00",
  },
];
const Discussions = () => {
  return (
    <div id="root">
      <Sidebar activeClassName="discussions" />
      <div className="page-wrapper">
        <div className="content">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">Page d'accueil </Link>
                  </li>
                  <li className="breadcrumb-item">
                    <FeatherIcon icon="chevron-right" />
                  </li>
                  <li className="breadcrumb-item active">Discussions</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Page Header */}
          <div className="col-md-12 mx-auto">
            <div className="card">
              <div className="card-body">
                <ul className="nav nav-tabs nav-tabs-solid nav-tabs-rounded nav-justified">
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      href="#solid-rounded-justified-tab1"
                      data-bs-toggle="tab"
                    >
                      Crées
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      href="#solid-rounded-justified-tab2"
                      data-bs-toggle="tab"
                    >
                      Planifiées
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      href="#solid-rounded-justified-tab3"
                      data-bs-toggle="tab"
                    >
                      Terminées
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      href="#solid-rounded-justified-tab4"
                      data-bs-toggle="tab"
                    >
                      Invitations
                    </Link>
                  </li>
                </ul>
                <div className="tab-content">
                  <div
                    className="tab-pane show active"
                    id="solid-rounded-justified-tab1"
                  >
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Titre</th>
                          <th>Spécialités Demandées</th>
                          <th>Invitations Acceptées</th>
                          <th>Invitations Rejetées</th>
                          <th>Date</th>
                          <th>Heure</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {discussionsCrees.map((discussion) => (
                          <DiscussionCree
                            key={discussion.id}
                            title={discussion.title}
                            neededSpecialities={discussion.neededSpecialities}
                            acceptedInvitations={discussion.acceptedInvitations}
                            rejectedInvitations={discussion.rejectedInvitations}
                            date={discussion.date}
                            time={discussion.time}
                          />
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="tab-pane" id="solid-rounded-justified-tab2">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Titre</th>
                          <th>Lancée Par</th>
                          <th>Spécialités Demandées</th>
                          <th>Date</th>
                          <th>Heure</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {discussionsPlanifiees.map((discussion) => (
                          <DiscussionPlanifiee
                            key={discussion.id}
                            title={discussion.title}
                            MainDoctor={discussion.MainDoctor}
                            neededSpecialities={discussion.neededSpecialities}
                            date={discussion.date}
                            time={discussion.time}
                          />
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="tab-pane" id="solid-rounded-justified-tab3">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Titre</th>
                          <th>Lancée Par</th>
                          <th>Participants</th>
                          <th>Date</th>
                          <th>Heure</th>
                          <th>Compte Rendu</th>
                        </tr>
                      </thead>
                      <tbody>
                        {discussionsTerminees.map((discussion) => (
                          <DiscussionTerminee
                            key={discussion.id}
                            title={discussion.title}
                            MainDoctor={discussion.MainDoctor}
                            DoctorsWhoAttended={discussion.DoctorsWhoAttended}
                            date={discussion.date}
                            time={discussion.time}
                          />
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div
                    className="tab-pane"
                    id="solid-rounded-justified-tab4"
                    style={{ borderRadius: "30px", background: "#F5F5F6" }}
                  >
                    <div className="discussion-section mt-5">
                      <div className="discussion-list mt-3">
                        {invitations.map((discussion) => (
                          <Invitation
                            key={discussion.id}
                            title={discussion.title}
                            description={discussion.description}
                            doctor={discussion.doctor}
                            doctorSpeciality={discussion.doctorSpeciality}
                            doctorPhoto={discussion.doctorPhoto}
                            date={discussion.date}
                            time={discussion.time}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discussions;
