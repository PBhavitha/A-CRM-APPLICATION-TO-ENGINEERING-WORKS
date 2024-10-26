import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Activity, Users, FileText, Clock, Settings } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-50">
      {/* Top Navigation */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Engineering Works CRM</h1>
        <div className="flex gap-4">
          <Settings className="w-6 h-6 text-gray-600" />
          <div className="w-8 h-8 rounded-full bg-blue-600" />
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card>
          <CardContent className="flex items-center p-4">
            <Activity className="w-8 h-8 text-blue-600 mr-3" />
            <div>
              <p className="text-sm text-gray-600">Active Projects</p>
              <p className="text-2xl font-bold">24</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center p-4">
            <Users className="w-8 h-8 text-green-600 mr-3" />
            <div>
              <p className="text-sm text-gray-600">Team Members</p>
              <p className="text-2xl font-bold">12</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center p-4">
            <Clock className="w-8 h-8 text-orange-600 mr-3" />
            <div>
              <p className="text-sm text-gray-600">Pending Tasks</p>
              <p className="text-2xl font-bold">18</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Project List */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Recent Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-center justify-between p-3 bg-white rounded-lg border">
                  <div>
                    <p className="font-medium">Project {item}</p>
                    <p className="text-sm text-gray-600">Client Name {item}</p>
                  </div>
                  <span className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full">In Progress</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Documents */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Documents</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-center p-2">
                  <FileText className="w-5 h-5 text-gray-500 mr-3" />
                  <div>
                    <p className="text-sm font-medium">Document {item}.pdf</p>
                    <p className="text-xs text-gray-600">Updated 2h ago</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
