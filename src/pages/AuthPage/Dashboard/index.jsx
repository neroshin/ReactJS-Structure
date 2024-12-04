import { useAuth } from '../../../provider/AuthContext';
import AdminLayout from '../../../layout/Admin';

function Dashboard() {
    const { authState } = useAuth();
  
  
    return (
        <AdminLayout>
            <div className="d-flex align-items-center justify-content-center">
                Dashboard
            </div>
        </AdminLayout>
    );
}

export default Dashboard;
